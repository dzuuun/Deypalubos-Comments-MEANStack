const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://dzun:yrrejdzun@cluster0.btnkl.mongodb.net/commentsdb', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err)
        console. log ('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON. stringify(err, undefined, 2));
});

module.exports = mongoose;