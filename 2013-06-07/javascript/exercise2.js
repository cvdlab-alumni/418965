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

var lake1 = T([0,1])([2*PI,6*PI])(DISK(PI/2)([12,1]))

var lake2 = T([0,1])([2*PI,2*PI])(DISK(PI)([12,1]))

var lake = STRUCT([COLOR([0,180,120]), EXTRUDE([0.5]), lake2, lake1])

model_lake = STRUCT([model,lake])
DRAW(model_lake);
