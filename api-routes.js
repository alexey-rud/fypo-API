// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome to FYPO API',
    });
});

// Import outfit and user controller
var outfitController = require('./outfitController');
var userController = require('./userController');

// Outfit's routes
router.route('/outfits')
    .get(outfitController.index)
    .post(outfitController.new);
router.route('/outfits/:outfit_id')
    .get(outfitController.view)
    .patch(outfitController.update)
    .put(outfitController.update)
    .delete(outfitController.delete);

    // User's routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;