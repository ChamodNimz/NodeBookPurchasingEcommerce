const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const functions = require('../utilities/helperFunctions');
const validation = require('../utilities/helperFunctions');
const config = require('../config');

// Create Admin Schema
const UserSchema = new Schema({

    username:{
        type:String,
        required: true,
        validate:{
            validator: (v)=>{
                return validation.isValidEmail(v);
            },
            message:'Enter a valid email as your username'
        }
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('user',UserSchema,'user');

/**
 *  Create a customer
 * 
 */
module.exports.createCustomer = (body,callback)=>{
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            
            bcrypt.hash(body.password,salt,(err,hash)=>{
                if(!err){
                    body.password = hash;
                    let user = new User({
                        username: body.username,
                        password: body.password,
                        role: config.roles.CUSTOMER
                    });
                    user.save(callback);
                }
                else{
                    callback(err,null);
                }
            });
        }
        else{
            callback(err,null);
        }
    });
}

/**
 *  Get User by username :
 *      (get username and password by username provided
 *       when a user tries to User)
 */
module.exports.getUserByUsername =  (username,role,callback)=>{
    let query = {username:username, role: role};
    User.findOne(query,callback);
}

/**
 *  Get User by id :
 *      (get username and password by username provided
 *       when a user tries to User)
 */
module.exports.getUserById =  (id,callback)=>{
    User.findById(id,callback);
}

/**
 *  Compare password for authentication
 * 
 */
module.exports.comparePassword = (password,hash,callback)=>{
    bcrypt.compare(password,hash,(err,isMatch)=>{
        if(err) callback(err,null);
        callback(null,isMatch);

    });
}


/**
 *  get all customers
 * 
 */
 module.exports.getAllCustomers = (callback)=>{
    User.find({},callback);
}
