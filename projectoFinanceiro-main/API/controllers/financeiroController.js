var mongojs = require('mongojs');
var express = require('express');
var db = require('../config/database');

var router = express.Router();

router.get('/financeiro', function(req, res){
    db.financeiro.find(function(err, docs){
        if(err){
            res.send(err);
        } else {
            console.log('Getting data...');
            res.json(docs);
        }
    });
});

router.post('/financeiro', function(req, res){
    db.financeiro.insert(req.body, function(err, doc){
        if(err){
            res.send(err);
        } else {
            console.log('Adding data...');
            res.json(doc);
        }
    });
});


router.put('/financeiro/:id', function(req, res){
    db.financeiro.findAndModify({query:{_id: mongojs.ObjectId(req.params.id)},
     update: {$set:{
         nome: req.body.nome,
         vencimento: req.body.vencimento,
         valor: req.body.valor
     }},
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

router.delete('/financeiro/:id', function(req, res){
    db.financeiro.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, doc){
        if(err){
            res.send(err);
        } else {
            console.log('Removing data...');
            res.json(doc);
        }
    });
});


module.exports = router;