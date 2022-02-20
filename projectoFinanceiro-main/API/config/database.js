var mongojs = require('mongojs');
var db = mongojs('setYourFinance',[
    'financeiro', 
    'despesas', 
    'entradas',
    'poupanca',
    ]);

module.exports = db;