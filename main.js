import Bruch from './Bruchrechnen.js';

//console.log("Stärkste Firma war " + Firma[pos] + " mit einem Jahresumsatz von:\t\t" + maxUmsatz.toLocaleString("de-de"));

var test = new Bruch(40,80);
var test2 = new Bruch(5,15);


console.log(test.div(test2).kuerzen().meinString());

