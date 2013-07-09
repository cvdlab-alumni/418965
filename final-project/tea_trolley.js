//funzione generale che costruisce la curva
var bez_curve = function(controlpoints){
	return BEZIER(S0)(controlpoints);}

//domini 
var dom1D = INTERVALS(1)(20);
var dom2D = PROD1x1([dom1D,dom1D]);
var domain = DOMAIN([[0,2*PI],[0,1]])([50,50]);

//generalizzazione per la creazione di superfici
var bez_sup = function(curves){
	return MAP(BEZIER(S1)(curves))(dom2D);} 


var movesPoints = function(pointList, axis, qty) {
	if (axis === 0) {
		return pointList.map(function(pt) {
				return [ pt[0]+qty, pt[1], pt[2] ];
			});
	} else if (axis === 1) {
		return pointList.map( function(pt) {
				return [ pt[0], pt[1]+qty, pt[2] ];
			});
	} else if (axis === 2) {
		return pointList.map( function(pt) {
				return [ pt[0], pt[1], pt[2]+qty ];
			});
	}
};

//funzione cilindro per la ruota
var wheel = function(r,h,d,color){

	var d1 = COLOR(color)(DISK([r])([36,1]));
	var c1 = COLOR(color)(CYL_SURFACE([r,d])([36,1]));
	var c2 = COLOR([0,0,0])(T([2])([d])(CYL_SURFACE([r,h])([36,1])));
	var c3 = T([2])([h+d])(c1);
	var d2 = T([2])([h+2*d])(d1);
	return STRUCT([c1,c2,c3,d1,d2]);
};

//funzione cerchio con bezier per manubrio
var circle = function (r,h) {
	return function (v) {
		return [r*COS(v[0]), r*SIN(v[0]),h];
		};
	};

//funzione manubrio
var steering = function(r,h){
	var d1 = circle(r,0);
	var d2 = circle(r,h);
	var tubo = MAP(BEZIER(S1)([d1,d2]))(domain);
	var cop1 = DISK([r])([36,1]);
	return STRUCT([tubo, cop1, T([2])([h])(cop1)]);

};

//costruzione della griglia dei piatti
var grid = function(maxx,maxz,axis,n){
	if (axis === 2){
		var p1 = POLYLINE([[0,0,0], [maxx,0,0]]);
		var griglia = REPLICA(n)([p1, T([axis])([maxz/(n-1)])]);
	} else if (axis === 0){
		var p1 = POLYLINE([[0,0,0], [0,0,maxz]]);
		var griglia = REPLICA(n)([p1, T([axis])([maxx/(n-1)])]);
	}

	return STRUCT(griglia);
};


var tea_trolley = function(colorLate,colorWheel){

	var struct_depth = 0.1;
	var trolley_depth = 2;
	var s = [];

	//structure
	var c1point = [[5.4, 5.28],[9.56, 5.28]];
	var c1up = bez_curve(c1point);
	var c1down = bez_curve(movesPoints(c1point,1,-struct_depth));
	var c1sup = bez_sup([c1up,c1down]);
	var c1 = EXTRUDE([struct_depth*2])(c1sup)
	
	var c2up = bez_curve([[9.56, 5.28], [9.72, 5.28], [9.88, 5.19], [9.88, 4.96]]);
	var c2down = bez_curve([[9.56, 5.28-struct_depth], [9.72, 5.28-struct_depth], [9.88-struct_depth, 5.1], [9.88-struct_depth, 4.96]])
	var c2sup = bez_sup([c2up,c2down]);
	var c2 = EXTRUDE([struct_depth*2])(c2sup);

	var c3point = [[9.88, 4.96], [9.88, 2.9]];
	var c3up = bez_curve(c3point);
	var c3down = bez_curve(movesPoints(c3point,0,-struct_depth))
	var c3sup = bez_sup([c3up,c3down]);
	var c3 = EXTRUDE([struct_depth*2])(c3sup);

	var c4up = bez_curve([[9.88, 2.9], [9.88, 2.61], [9.85, 2.53], [9.57, 2.52]])
	var c4down = bez_curve([[9.88-struct_depth, 2.9], [9.88-struct_depth, 2.61], [9.79, 2.52+struct_depth], [9.57, 2.52+struct_depth]])
	var c4sup = bez_sup([c4up,c4down]);
	var c4 = EXTRUDE([struct_depth*2])(c4sup);

	var c5point = [[9.57, 2.52],[8.57,2.52]];
	var c5up = bez_curve(c5point);
	var c5down = bez_curve(movesPoints(c5point,1,+struct_depth));
	var c5sup = bez_sup([c5up,c5down]);
	var c5 = EXTRUDE([struct_depth*2])(c5sup);

	var c6up = bez_curve([[7.01, 3.22], [7.74, 2.86], [8.3, 2.46], [8.57, 2.52]]);
	var c6down = bez_curve([[7.01, 3.22+struct_depth], [7.74, 2.86+struct_depth], [8.3, 2.46+struct_depth], [8.57, 2.52+struct_depth]]);
	var c6sup = bez_sup([c6up,c6down]);
	var c6 = EXTRUDE([struct_depth*2])(c6sup);

	var c7point = [[7.01, 3.22],[5.45, 3.22]]; 
	var c7up = bez_curve(c7point);
	var c7down = bez_curve(movesPoints(c7point,1,+struct_depth));
	var c7sup = bez_sup([c7up,c7down]);
	var c7 = EXTRUDE([struct_depth*2])(c7sup);

	var c8up = bez_curve([[5.13, 3.63], [5.1, 3.3], [5.24, 3.22], [5.45, 3.22]]);
	var c8down = bez_curve([[5.13+struct_depth, 3.63], [5.1+struct_depth, 3.3], [5.22+struct_depth, 3.3], [5.45, 3.22+struct_depth]]);
	var c8sup = bez_sup([c8up,c8down]);
	var c8 = EXTRUDE([struct_depth*2])(c8sup);

	var c9point = [[5.13, 3.63],[5.13,4.93]];
	var c9up = bez_curve(c9point);
	var c9down = bez_curve(movesPoints(c9point,0,+struct_depth));
	var c9sup = bez_sup([c9up, c9down]);
	var c9 = EXTRUDE([struct_depth*2])(c9sup);

	var c10up = bez_curve([[5.13, 4.93], [5.12, 5.23], [5.26, 5.28], [5.4, 5.28]])
	var c10down = bez_curve([[5.13+struct_depth, 4.93], [5.12+struct_depth, 5.23], [5.26, 5.28-struct_depth], [5.4, 5.28-struct_depth]])
	var c10sup = bez_sup([c10up, c10down]);
	var c10 = EXTRUDE([struct_depth*2])(c10sup);

	var struct_sx = STRUCT([c1,c2,c3,c4,c5,c6,c7,c8,c9,c10]);
	var struct = COLOR(colorLate)(STRUCT([struct_sx, T([2])([trolley_depth]), struct_sx]));
	s.push(struct);

	//wheels
	var w = T([2])([-struct_depth])(wheel(1,0.1,0.01,colorWheel));
	var wheels = STRUCT([T([0,1])([6.33, 3.28]), w, T([2])([trolley_depth+3*struct_depth]), w]);
	s.push(wheels)

	//steering wheel
	var steer = COLOR(colorLate)(T([0,1])([9.78, 5.24])(steering(0.05, trolley_depth+2*struct_depth)));
	s.push(steer);

	//body
	var body_depth = trolley_depth+4*struct_depth-struct_depth/4;
	var b1up = CUBOID([4.5,struct_depth, struct_depth/4]);
	var b3up = T([2])([body_depth])(b1up);
	var b2up = CUBOID([struct_depth/4, struct_depth, body_depth]);
	var b4up = T([0])([4.5])(b2up);
	var bbottom = CUBOID([4.5,0,2.375]);
	var bodyup = COLOR(colorLate)(T([0,1,2])([5.12, 5.27,-struct_depth])(STRUCT([b1up,b2up,b3up,b4up,bbottom])));
	s.push(bodyup);

	var plateup = COLOR(colorWheel)(T([0,1,2])([5.12,5.28,-struct_depth])(CUBOID([4.5, 0.015,2.375])));
	s.push(plateup);
	
	var gridupz = T([0,1,2])([5.12,5.28+0.016,-struct_depth])(grid(4.5,2.375,2,5));
	s.push(gridupz);
	var gridupx = T([0,1,2])([5.12,5.28+0.016,-struct_depth])(grid(4.5,2.375,0,9));
	s.push(gridupx)

	var b1down = CUBOID([3.45,struct_depth, struct_depth/4]);
	var b3down = T([2])([trolley_depth+struct_depth+struct_depth/2])(b1down);
	var b2down = CUBOID([struct_depth/4, struct_depth, trolley_depth+struct_depth+struct_depth/2]);
	var b4down = T([0])([3.45])(b2down);
	var bbottom2 = CUBOID([3.45,0,2.15]);
	
	var bodydown = COLOR(colorLate)(T([0,1,2])([6.31, 3.32, struct_depth/4])(STRUCT([b1down,b2down,b3down,b4down,bbottom2])));
	s.push(bodydown);

	var platedown = COLOR(colorWheel)(T([0,1,2])([6.31,3.33,+struct_depth/4])(CUBOID([3.45, 0.015,2.15])));
	s.push(platedown);
	
	var griddownz = T([0,1,2])([6.31,3.33+0.016,struct_depth/4])(grid(3.45,2.15,2,4));
	s.push(griddownz);
	var griddownx = T([0,1,2])([6.31,3.33+0.016,struct_depth/4])(grid(3.45,2.15,0,8));
	s.push(griddownx)


	return STRUCT(s);


}

colorL = [255/255,211/255,155/255];
colorW = [224/255,238/255,238/255];
var t = tea_trolley(colorL,colorW);
DRAW(t);