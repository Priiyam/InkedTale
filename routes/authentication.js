const User =  require('../models/user');

module.exports = (router) => {

    router.post('/register', (req, res) => {
        if (!req.body.email || !req.body.username || !req.body.password) {
            res.json({ success:false, message: 'All fields are compulsory.'});
        }
        else {
            let user = new User({
                email: req.body.email.toLowerCase(),
                username: req.body.username.toLowerCase(),
                password: req.body.password
            });
            user.save((err) => {
                if (err){
                    if (err.code == 11000){
                        res.json({success:false, message: 'Username or email already exists.'})
                    }
                    else if (err.errors){
                        if (err.errors.email){
                            res.json({success:false, message: err.errors.email.message})
                        }
                        else if (err.errors.username){
                            res.json({success:false, message: err.errors.username.message})
                        }
                        else if (err.errors.password){
                            res.json({success:false, message: err.errors.password.message})
                        }
                        else{
                            res.json({success: false, message: 'Could not create account. Error: ', err});
                        }
                    }
                    else{
                        res.json({success: false, message: 'Could not create account. Error: ', err});
                    }
                }
                else{
                    res.json({success:true, message:'Account successfully created.'});
                }
            });
        }
    });

    router.get('/checkEmail/:email', (req, res) => {
        if (!req.params.email){
            res.json({success: false, message: 'Email was not provided'});
        }
        else{
            User.findOne({email: req.params.email}, (err, user) => {
                if (err){
                    res.json({success: false, message: err});
                }
                else if (user) {
                    res.json({success: false, message: 'Email is already taken'});
                }
                else{
                    res.json({success: true, message: 'Email is available'});
                }
            });
        }
    }); 

    return router;
}