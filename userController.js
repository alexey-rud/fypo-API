// Import user model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            data: users
        });
    });
};

// Handle create user actions
exports.new = function (req, res) {
    var user = new User();
    user.user_name = req.body.user_name;
    user.user_pwd = req.body.user_pwd;
    user.email = req.body.email;
    user.url_foto = req.body.url_foto;
// save the user and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New user created!',
            data: user
        });
    });
};
// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'user details loading..',
            data: user
        });
    });
};

// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.user_name = req.body.user_name ? req.body.user_name : user.user_name;
        user.user_pwd = req.body.user_pwd ? req.body.user_pwd : user.user_pwd;
        user.email = req.body.email ? req.body.email : user.email;
        user.url_foto = req.body.url_foto ? req.body.url_foto : user.url_foto;
// save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'user Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'user deleted'
        });
    });
};


/*
// Select users by "body_shape" field

//db.inventory.find( { status: "A" } )

exports.viewByBodyShape = function (req, res) {
    user.find({ status: req.params.body_shape } , function (err, user) {
        if (err)
            res.send(err);
        res.json({
            data: user
        });
    });
};


// Select users by "body_shape" field
/*
db.inventory.find( { status: "A" } )

exports.viewByBodyShape = function (req, res) {
    user.findById(req.params.find({body_shape: }), function (err, user) {
        if (err)
            res.send(err);
        res.json({
            data: user
        });
    });
};

*/