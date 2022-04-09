
const passport = require('passport');

module.exports = {

    database_cloud:'mongodb+srv://admin:admin123@cluster0.9zbf4.mongodb.net/test',
    secret:'$2a$10$hVGvofC92FZJuZV8wLHde.DcTbvtRj632UfCcIBLBxCDoTA.B4OSC', // Secret key need to change when deploying 
    port:3000,
    roles: Object.freeze({
        ADMIN: 'admin',
        CUSTOMER: 'customer'
      }),
    authGuard: passport.authenticate('jwt', { session: false })          
}


