// Import like model
Like = require('./likeModel');
// Handle index actions
exports.index = function (req, res) {
    Like.get(function (err, likes) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "likes retrieved successfully",
            data: likes
        });
    });
};
// Handle create like actions
exports.new = function (req, res) {
    var like = new Like();
    like.id_usuario = req.body.id_usuario; // ? req.body.body_type : like.body_type;
    like.id_outfit = req.body.id_outfit;
// save the like and check for errors
    like.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New like created!',
            data: like
        });
    });
};
// Handle view like info
exports.view = function (req, res) {
    Like.findById(req.params.like_id, function (err, like) {
        if (err)
            res.send(err);
        res.json({
            message: 'like details loading..',
            data: like
        });
    });
};

// Handle update like info
exports.update = function (req, res) {
    Like.findById(req.params.like_id, function (err, like) {
        if (err)
            res.send(err);
        like.id_usuario = req.body.id_usuario ? req.body.id_usuario : like.id_usuario;
        like.id_outfit = req.body.id_outfit ? req.body.id_outfit : like.id_outfit;
// save the like and check for errors
        like.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'like Info updated',
                data: like
            });
        });
    });
};
// Handle delete like
exports.delete = function (req, res) {
    Like.remove({
        _id: req.params.like_id
    }, function (err, like) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'like deleted'
        });
    });
};


