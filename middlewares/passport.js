const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');
const User = require('../models/user');

module.exports = (passport)=>{

    let opts = {};
    
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    // opts.issuer = config.issuer;
    //opts.audience = config.audience;
    passport.use(new JwtStrategy(opts,(jwtPayload,done)=>{
        
        User.getUserById(jwtPayload.id,(err,user)=>{
            if(err){
                return done(err,false);
            }
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    }));

}    
