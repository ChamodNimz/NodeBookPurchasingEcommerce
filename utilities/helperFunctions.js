const base64 = require('js-base64').Base64;


/**
 *  Hasher
 * 
 */
module.exports.bcryptHash = function(bcrypt,string){
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(string,salt);
}


/**
 *  Salt genarator  
 * 
 */
module.exports.saltGen = function(bcrypt){
    var salt = bcrypt.genSaltSync(10);
    return salt;
}



/**
 *  Random password genarator 
 * 
 */
module.exports.generatePassword = function(){
    var password = generator.generate({
        length:5,
        numbers:true
    });
    return password;
}


/**
 *  Base64 encoder
 * 
 */
module.exports.base64Encode = function(string){
     return base64.encode(string);
}


/**
 *  Base64 decoder
 * 
 */
module.exports.base64Decode = function(code){
     return base64.decode(code);
}

/**
 *  Email validate
 * 
 */ 
 module.exports.isValidEmail = function (email){
    if(email.toLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        return true;
    }
    else{
        return false;
    }
}

/**
 *  Check book name or a similar field
 *      whitelist :
 *         space, ', ., @, -, _ characters: 5-min 20-max  
 * 
 */
 module.exports.isValidBookName = function(username){

    if(username.match(/^[a-zA-Z0-9\s\'_\.]{1,70}$/)){
        return true;
    }else{
        return false;
    }
}