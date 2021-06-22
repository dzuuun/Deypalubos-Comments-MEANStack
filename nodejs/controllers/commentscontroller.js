const express = require('express');
var router = express.Router();

var  {Comment}  = require('../models/comments');
var ObjectId = require('mongodb').ObjectID;

// date and time
const d = Date();
console.log("Server started on: " + d.toString());

// view all comments
router.get('/', (req, res) => {
    Comment.find((err, docs) => {
        if (!err) { res. send (docs); }
        else { console.log('Error in retrieving comment  : ' + JSON-stringify(err, undefined, 2)); }
    });
});

// view comments by :id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with given id : ${req.params.id}');
    
    Comment.findById(req.params.id, (err, doc) => {
        if (!err) {res.send(doc); }
        else { console.log('Error in retrieving comment :' + JSON.stringify(err, undefined, 2)); }
    });
});
 
// save comment
router.post ('/', (req, res) => {
    var cmts = new Comment({
        name: req.body.name,
        comment: req.body.comment,
        
    });
    cmts.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in saving comment... :' + JSON.stringify(err, undefined, 2)) ; }
    }); 
});

// delete comment
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record found with given id : ${req.params.id}');

    Comment.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {res.send(doc); }
        else {console.log('Error in deleting comment :' + JSON.stringify(err, undefined, 2)); }
    });
});

// update comment
router.put ('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with given id : ${req.params.id}');

    var cmts = {

        name: req.body.name,
        comment: req.body.comment,
    
    };
    Comment.findByIdAndUpdate(req.params.id, { $set: cmts }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console. log('Error in updating comment' + JSON.stringify (err, undefined, 2)) ; }
    });
});

module.exports = router;