// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var outfitController = require('./outfitController');
// Contact routes
router.route('/outfits')
    .get(outfitController.index)
    .post(outfitController.new);
router.route('/outfits/:outfit_id')
    .get(outfitController.view)
    .patch(outfitController.update) 
    .put(outfitController.update)
    .delete(outfitController.delete);
router.route('/outfits/:body_shape')
    .get(outfitController.viewByBodyShape)
// Export API routes
module.exports = router;