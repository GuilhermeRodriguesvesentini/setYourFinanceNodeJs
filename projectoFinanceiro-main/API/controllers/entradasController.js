var mongojs = require('mongojs');
var express = require('express');
var db = require('../config/database');

var router = express.Router();

router.get('/entradas', function(req, res){
    db.entradas.find(function(err, docs){
        if(err){
            res.send(err);
        } else {
            console.log('Getting data...');
            res.json(docs);
        }
    });
});

router.post('/entradas', function(req, res){
    db.entradas.insert(req.body, function(err, doc){
        if(err){
            res.send(err);
        } else {
            console.log('Adding data...');
            res.json(doc);
        }
    });
});

router.put('/entradas/:id', function(req, res){
    db.entradas.findAndModify({query:{_id: mongojs.ObjectId(req.params.id)},
     update: {$set: req.body},
     new: true
    }, function(err, doc){
        if(err){
            res.send(err);
        } else {
            console.log('Updating data...');
            res.json(doc);
        }
    });
});

router.delete('/entradas/:id', function(req, res){
    db.entradas.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, doc){
        if(err){
            res.send(err);
        } else {
            console.log('Removing data...');
            res.json(doc);
        }
    });
});


module.exports = router;