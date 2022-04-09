/**
 *  Validations
 * 
 * */ 

// Email check 
module.exports.isEmailValid = function (email){
    if(email.toLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        return true;
    }
    else{
        return false;
    }
}

// Valid phone no
module.exports.isMobileValid = function (mobile){
    if(String(mobile).match(/^[0-9]{10}$/)){
        return true;
    }
    else{
        return false;
    }
}


/**
 *  Check username or a field like that 
 *      whitelist :
 *         space, ', ., @, -, _ characters: 5-min 20-max  
 * 
 */
module.exports.isValidUsername = function(username){

    if(username.match(/^[a-zA-Z0-9\s\'_\.]{5,20}$/)){
        return true;
    }else{
        return false;
    }
}

/**
 *  Validate a name 
 *  
 */
module.exports.isValidName = function(name){

    if(name.match(/^[a-zA-Z\s\'\.]{3,30}$/)){
        return true;
    }else{
        return false;
    }
}

/**
 *  Validate full name 
 *  
 */
module.exports.isValidFullName = function(fullname){

    if(fullname.match(/^[a-zA-Z\s\'\.]{3,50}$/)){
        return true;
    }else{
        return false;
    }
}

/**
 *  Validate gender 
 *  
 */
module.exports.isValidGender = function(gender){

    if(gender =='Male'|| gender == 'Female'){
        return true;
    }else{
        return false;
    }
}

/**
 *  Validate NIC 
 *  
 */
module.exports.isValidNIC = function(nic){

    if(nic.match(/^[0-9]{9}[vV]{1}$/)){
        return true;
    }else{
        return false;
    }
}


/**
 *  Check password 
 *      whitelist :
 *         space, ', ., @, -, _ , ^, *, \, (, ), #, $, %
 *         characters: 5-min 15-max  
 * 
 */
module.exports.isValidPassword = function(password){

    if(password.match(/^[a-zA-Z0-9\'@\-_\.!\^\*\(\)#\$\%]{5,18}$/)){
        return true;
    }else{
        return false;
    }
}


/**
 *  Validate book name 
 *  
 */
module.exports.isValidBookName = function(name){

    if(name.match(/^[a-zA-Z\s\'\.\-_]{3,300}$/)){
        return true;
    }else{
        return false;
    }
}


