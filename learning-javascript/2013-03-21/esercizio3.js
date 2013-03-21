
function Triangle(lato1, lato2, lato3) { this.lato1 = lato1; this.lato2 = lato2; this.lato3 = lato3; }

var punto3 = new Punto2D(8,3);

var lato2 = new Edge(punto2, punto3);

var lato3 = new Edge(punto1, punto3);

var triangolo = new Triangle(lato1, lato2, lato3);

Triangle.prototype.perimeter = function() {return this.lato1.length() + this.lato2.length() + this.lato3.length();}

Triangle.prototype.area = function() {
var p = this.perimeter()/2; // semiperimetro
var a = this.lato1.length(); //lunghezza dei lati
var b = this.lato2.length();
var c = this.lato3.length();
return Math.sqrt(p*(p-a)*(p-b)*(p-c));
 
}

triangolo.area();
