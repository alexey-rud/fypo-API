// Import outfit model
Outfit = require('./outfitModel');
// Handle index actions
exports.index = function (req, res) {
    Outfit.get(function (err, outfits) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "outfits retrieved successfully",
            data: outfits
        });
    });
};
// Handle create outfit actions
exports.new = function (req, res) {
    var outfit = new Outfit();
    outfit.body_type = req.body.body_type; // ? req.body.body_type : outfit.body_type;
    outfit.photo_url = req.body.photo_url;
    outfit.url_tienda = req.body.url_tienda;
    outfit.id_usuario = req.body.id_usuario;
// save the outfit and check for errors
    outfit.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New outfit created!',
            data: outfit
        });
    });
};
// Handle view outfit info
exports.view = function (req, res) {
    Outfit.findById(req.params.outfit_id, function (err, outfit) {
        if (err)
            res.send(err);
        res.json({
            message: 'outfit details loading..',
            data: outfit
        });
    });
};

// Handle update outfit info
exports.update = function (req, res) {
Outfit.findById(req.params.outfit_id, function (err, outfit) {
        if (err)
            res.send(err);
        outfit.body_type = req.body.body_type ? req.body.body_type : outfit.body_type;
        outfit.photo_url = req.body.photo_url ? req.body.photo_url : outfit.photo_url;
        outfit.url_tienda = req.body.url_tienda ? req.body.url_tienda : outfit.url_tienda;
        outfit.id_usuario = req.body.id_usuario ? req.body.id_usuario : outfit.id_usuario;
// save the outfit and check for errors
        outfit.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'outfit Info updated',
                data: outfit
            });
        });
    });
};
// Handle delete outfit
exports.delete = function (req, res) {
    Outfit.remove({
        _id: req.params.outfit_id
    }, function (err, outfit) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'outfit deleted'
        });
    });
};


