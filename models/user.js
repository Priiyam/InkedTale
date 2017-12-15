const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

let emailLengthChecker = (email) => {
    if (!email){
        return false;
    }
    else{
        if (email.length < 5 || email.length > 30){
            return false;
        }
        else{
            return true;
        }
    }
};

let validEmailChecker = (email) => {
    // Check if e-mail exists
    if (!email) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid e-mail
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email); // Return regular expression test results (true or false)
    }
};

let usernameLengthChecker = (username) => {
    if (!username){
        return false;
    }
    else{
        if (username.length< 3 || username.length > 15 ){
            return false;
        }
        else {
            return true;
        }
    }
};

let validUsername = (username) => {
    if (!email){
        return false;
    }
    else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};

let passwordLengthChecker = (password) => {
    if (!password){
        return false;
    }
    else{
        if (password.length < 6 || password.length >35){
            return false;
        }
        else{
            return true;
        }
    }
};

const emailValidator = [{
    validator: emailLengthChecker,
    message: 'Username must be between 5-30 characters long.'
    },
    {
    validator: validEmailChecker,
    message: 'Please enter a valid email address.'
}]

const usernameValidator = [{
    validator: usernameLengthChecker,
    message: 'Username must be between 3-15 characters long.'
},{
    validator: validUsername,
    message: 'Special characters are not allowed.'
}]

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, validate: emailValidator},
    username: { type: String, required: true, unique:true, validate: usernameValidator},
    password: { type: String, required: true}
});

//creating a middleware to encrypt password before saving to db
userSchema.pre('save', function(next) {
    if (!this.isModified('password'))
    return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};



module.exports = mongoose.model('User', userSchema);