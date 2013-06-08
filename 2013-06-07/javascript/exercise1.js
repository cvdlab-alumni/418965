var domain = DOMAIN([[0,20],[0,21]])([50,50])

var height  = function(dominio){
	var x = dominio[0];
	var y = dominio[1];
	var z = SIN(x*y)*COS(x*y);

	//parte pianeggiante + parte montuosa
	if(x<= 10) dz = x*y*Math.random()/500; 
	else dz = x*y*Math.random()/100;
	return [x, y, dz+z];
}

var model = COLOR([139/255,69/255,19/255])(MAP(height)(domain))

DRAW(model)