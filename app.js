var express = require('express');
var app = express();

// https://docs.mongodb.com/v3.2/reference/method/Date/


// Date contiene simpre una fecha y hora
const fechaHora = new Date();
console.log(fechaHora); // en foramto iso 8601
console.log(fechaHora.toLocaleTimeString()); 
// 2019-03-21T22:49:36.100Z
// año-mes-dia T hora minuro segundo y milisegundo z hora en el meridiano

// intermanente almacena los milisegundos transucrridos desde el 
// 1/1/1970 00:00:00 UTC
console.log(fechaHora.getTime());
// 1553208958258


fechaHora.setFullYear(2020);
console.log(fechaHora);
// 2020-03-21T22:57:08.130Z

// funciones segun desplazamiento local y segun UTC
console.log(fechaHora.getHours()); // hora local
console.log(fechaHora.getUTCHours()); // hora en el meridiano
//19
//22

// en el meridiano son 3 horas mas que en Argentina

// el pirmer mes es 0    enero = 0   diciembre = 11
// el primer dia es 1    
console.log(new Date(2017, 0, 1, 15, 30, 15, 763));
// 2017-01-01T18:30:15.763Z


// puedo especificar valores fuera de rango
console.log(new Date(2017, 12, 1)); // pasa al año siguiente
console.log(new Date(2017, 13, 30));  
// 2018-01-01T03:00:00.000Z
// 2018-03-02T03:00:00.000Z

// puedo aprovechar esto para sumar periodos a una fecha dada
const d = new Date(2017, 6, 26, 0, 0, 0, 0); // hora 0 en mi pc
d.setMonth(d.getMonth() + 1);
console.log(d);
// 2017-08-26 T 03:00:00.000Z    hora 03 del meridiano

// forma de detectar una fecha no valida
const unaFechaNoValida = new Date('abc'); // esto guarda NaN
const esInvalida = isNaN(unaFechaNoValida.getTime()); // pregutnamos si es NaN
console.log('Es invalida ', esInvalida);







// first day of month
function firstDayOfMonth(given_month) { 
  return new Date().setMonth(given_month, 1).setHours(0,0,0,0); 
}

// last day of month
function lastDayOfMonth(given_month) { 
  return new Date().setMonth(given_month + 1, 0).setHours(23,59,59,0); 
}


function firstDayOfMonth(given_month) {
    var d = new Date();
    d.setMonth(given_month, 1);
    return d.setHours(0,0,0,0);
}

function lastDayOfMonth(given_month) {
    var d = new Date();
    d.setMonth(given_month + 1, 0);
    return d.setHours(23,59,59,0);
}

var temp = {
    firstDayOfMonth: firstDayOfMonth(0),
    lastDayOfMonth: lastDayOfMonth(0)
}
console.log(JSON.stringify(temp))







// I get it now: 
// The first returns the date in the UTC timezone, with the literal date values of the local time. 
// The second returns the date in the local timezone, but with the UTC literal date values. 
function createDateAsUTC(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
}

function convertDateToUTC(date) { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}



console.log(createDateAsUTC(new Date()));
console.log(convertDateToUTC(createDateAsUTC(new Date())));
console.log(new Date());











// https://stackblitz.com/edit/angular-qboun2?file=src%2Fapp%2Fapp.component.ts
// https://stackoverflow.com/questions/35754586/format-date-as-dd-mm-yyyy-using-pipes


//https://stackoverflow.com/questions/43264992/angular-4-date-pipe-converting-wrongly

//angular date pipe
// https://grokonez.com/frontend/angular/angular-6/angular-built-in-datepipe-example-pre-defined-format-timezone-locale-custom-format


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
