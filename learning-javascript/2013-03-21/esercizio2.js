
function Edge(punto1, punto2) {this.punto1 = punto1; this.punto2 = punto2;}

var lato1 = new Edge(punto1, punto2);

Edge.prototype.length = function() {return Math.sqrt(Math.pow((this.punto1.x - this.punto2.x),2) + Math.pow((this.punto1.y - this.punto2.y),2)) }

lato1.length();


