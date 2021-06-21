const mongoose = require('mongoose');

var Comment = mongoose.model('Comment', {
    name: { type: String},
    comment: { type: String}
}, 'cmts');

module.exports = {Comment} ;