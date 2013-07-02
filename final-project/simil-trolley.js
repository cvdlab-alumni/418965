
var bez_curve = function(controlpoints){
	return BEZIER(S0)(controlpoints);}

//domini 
var dom1D = INTERVALS(1)(30);
var dom2D = PROD1x1([dom1D,dom1D]);

//generalizzazione per la creazione di superfici
var bez_sup = function(curves){
	return MAP(BEZIER(S1)(curves))(dom2D);} 

//superfici con hermite 

var herm_sup = function(curves){
	return MAP(CUBIC_HERMITE(S1)(curves))(dom2D);
}

var wheel = function(r,h,d){

	var d1 = COLOR([224/255,238/255,238/255])(DISK([r])([36,1]));
	var c1 = COLOR([224/255,238/255,238/255])(CYL_SURFACE([r,d])([36,1]));
	var c2 = COLOR([0,0,0])(T([2])([d])(CYL_SURFACE([r,h])([36,1])));
	var c3 = T([2])([h+d])(c1);
	var d2 = T([2])([h+2*d])(d1);
	return STRUCT([c1,c2,c3,d1,d2]);
};


var simil_trolley = function(color){
	var struct_depth = 0.05;
	var tube_depth = 2*struct_depth;
	var s = [];

	var c1up = bez_curve([[2.6, 4.84,0],[4.36,4.84,0]]);
	var c1down = bez_curve([[2.6, 4.84-struct_depth,0],[4.36,4.84-struct_depth,0]]);
	var c11 = herm_sup([c1up,c1down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c11);
	var c12 = herm_sup([c1up,c1down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c12);

	var c2up = bez_curve([[4.36, 4.84,0], [4.49, 4.84,0], [4.56, 4.84,0], [4.54, 4.58,0]]);
	var c2down = bez_curve([[4.36, 4.84-struct_depth,0], [4.49, 4.83-struct_depth,0], [4.53-struct_depth, 4.78,0], [4.54-struct_depth, 4.58,0]]);
	var c21 = herm_sup([c2up,c2down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c21);
	var c22 = herm_sup([c2up,c2down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c22);

	var c3up = bez_curve([[4.54,4.58,0],[4.54, 2.86,0]]);
	var c3down = bez_curve([[4.54-struct_depth, 4.58,0],[4.54-struct_depth, 2.86,0]]);
	var c31 = herm_sup([c3up,c3down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c31);
	var c32 = herm_sup([c3up,c3down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c32);

	var c4up = bez_curve([[4.54, 2.86,0], [4.51, 2.61,0], [4.38, 2.51,0], [4.16, 2.71,0]]);
	var c4down = bez_curve([[4.54-struct_depth, 2.86,0], [4.51-struct_depth, 2.65,0], [4.34, 2.55+struct_depth,0], [4.16, 2.71+struct_depth,0]]);
	var c41 = herm_sup([c4up,c4down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c41);
	var c42 = herm_sup([c4up,c4down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c42);

	var c5up = bez_curve([[4.16, 2.71,0], [3.18, 3.5,0], [2.73, 3.8,0], [3.22, 3.78,0]]);
	var c5down = bez_curve([[4.16, 2.71+struct_depth,0], [3.18, 3.5+struct_depth,0], [2.73+struct_depth, 3.8-struct_depth,0], [3.22+struct_depth, 3.78-struct_depth,0]]);
	var c51 = herm_sup([c5up,c5down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c51);
	var c52 = herm_sup([c5up,c5down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c52);

	var c6up = bez_curve([[3.22, 3.78,0],[4.515,3.78,0]]);
	var c6down = bez_curve([[3.22, 3.78-struct_depth,0],[4.515,3.78-struct_depth,0]]);
	var c61 = herm_sup([c6up,c6down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c61);
	var c62 = herm_sup([c6up,c6down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c62);

	var c7up = bez_curve([[3.22, 3.78,0],[4.515,3.78,0]]);
	var c7down = bez_curve([[3.22, 3.78-struct_depth,0],[4.515,3.78-struct_depth,0]]);
	var c71 = herm_sup([c7up,c7down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(c71);
	var c72 = herm_sup([c7up,c7down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(c72);
	/////////////////////////////////////////////////////////////

	var c8up = bez_curve([[3.25,4.84,0],[3.25-1,4.84,0]]);
	var c8down = bez_curve([[3.25,4.84-struct_depth,0],[3.25-1,4.84-struct_depth,0]]);
	var c81 = herm_sup([c8up,c8down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(T([0,2])([3.1,2.7])(R([0,2])([PI/2])(c81)));
	var c82 = herm_sup([c8up,c8down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(T([0,2])([3.1,2.7])(R([0,2])([PI/2])(c82)));

	var c9up = bez_curve([[3.25, 4.84,0], [3.46, 4.84,0], [3.36, 4.74,0], [3.38, 3.78,0]]);
	var c9down = bez_curve([[3.25, 4.84-struct_depth,0], [3.39, 4.84-struct_depth,0], [3.36-struct_depth, 4.74,0], [3.38-struct_depth, 3.78,0]]);
	var c91 = herm_sup([c9up,c9down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(T([0,2])([3.1,2.7])(R([0,2])([PI/2])(c91)));
	var c92 = herm_sup([c9up,c9down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(T([0,2])([3.1,2.7])(R([0,2])([PI/2])(c92)));

	var d1up = bez_curve([[2.25, 4.84,0], [2.08, 4.84,0], [2.09, 4.9,0], [2.09, 3.78,0]]);
	var d1down = bez_curve([[2.25, 4.84-struct_depth,0], [2.08, 4.84-struct_depth,0], [2.09+struct_depth, 4.9,0], [2.09+struct_depth, 3.78,0]]);
	var d11 = herm_sup([d1up,d1down,[0,0,-tube_depth],[0,0,tube_depth]]); 
	s.push(T([0,2])([3.1,2.7])(R([0,2])([PI/2])(d11)));
	var d12 = herm_sup([d1up,d1down,[0,0,tube_depth],[0,0,-tube_depth]]); 
	s.push(T([0,2])([3.1,2.7])(R([0,2])([PI/2])(d12)));

	//wheels 
	var w1 = T([0,1,2])([3.05, 3.7,-0.75])(wheel(1.09,0.05,0.01));
	var w = STRUCT([w1, T([2])([1.35]), w1]);
	s.push(w);

	var asse = T([0,1,2])([3.1, 3.78,-0.68])(CYL_SURFACE([0.025, 1.29])([36,1]));
	s.push(asse);

	//piatti 
	var body_depth = 1.21+2*struct_depth
	var b1up = CUBOID([1.94+0.5,2*struct_depth, struct_depth]);
	var b3up = T([2])([body_depth])(b1up);
	var b2up = CUBOID([struct_depth, 2*struct_depth, body_depth+struct_depth]);
	var b4up = T([0])([1.94+0.5])(b2up);
	var bbottom = CUBOID([1.94+0.5,0,1.31]);
	var bodyup = T([0,1,2])([2, 4.84,-0.7])(STRUCT([b1up,b2up,b3up,b4up,bbottom]));
	s.push(bodyup);

	var b1down = CUBOID([1.35,struct_depth, struct_depth/2]);
	var b3down = T([2])([body_depth-0.15])(b1down);
	var b2down = CUBOID([struct_depth/2, struct_depth, body_depth-0.125]);
	var b4down = T([0])([1.35])(b2down);
	var bbottom2 = CUBOID([1.35,0,body_depth-0.15]);
	var bodydown = T([0,1,2])([3.12, 3.8,-0.63])(STRUCT([b1down,b3down,b2down,b4down,bbottom2]));
	s.push(bodydown);

	return COLOR(color)(STRUCT(s));
};

colorA = [255/255,25/255,25/255];
var t = simil_trolley(colorA);
DRAW(t);