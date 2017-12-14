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

    return router;
}