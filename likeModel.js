var mongoose = require('mongoose');
// Setup schema
var likeSchema = mongoose.Schema({
    id_usuario: {
        type: String,
        required: true
    },
    id_outfit: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
    
});
// Export Contact model
var Like = module.exports = mongoose.model('like', likeSchema);
module.exports.get = function (callback, limit) {
    Like.find(callback).limit(limit);
}