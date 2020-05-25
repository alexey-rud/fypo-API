var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    user_name: {
        type: String,
        unique : true,
        required: true
    },
    user_pwd: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique : true,
        required: true
    },
    url_foto: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});
// Export Contact model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}