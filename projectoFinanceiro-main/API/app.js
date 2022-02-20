var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var financeiroController = require('./controllers/financeiroController');
var despesasController = require('./controllers/despesasController');
var entradasController = require('./controllers/entradasController');
var poupancaController = require('./controllers/poupancaController');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../finance')));

app.get('/', function(req, res){
    res.send('it works!');
});

app.use(financeiroController);
app.use(despesasController);
app.use(entradasController);
app.use(poupancaController);


app.listen(3000);
console.log('Running on port 3000...');