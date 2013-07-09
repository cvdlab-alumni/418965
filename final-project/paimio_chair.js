//funzione generale che costruisce la curva
var bez_curve = function(controlpoints){
	return BEZIER(S0)(controlpoints);}

//domini -
var dom1D = INTERVALS(1)(10);
var dom2D = PROD1x1([dom1D,dom1D]);

//generalizzazione per la creazione di superfici
var bez_sup = function(curves){
	return MAP(BEZIER(S1)(curves))(dom2D);} 

var paimio_chair = function (colorInt, ColorLateral){
	var s = [];
	var body_depth = 2;
	var body_thick = 0.05;
	var lateral_thick = 0.075;
	var lateral_depth = 0.15;

	//body' chair
	var c11up = bez_curve([[4.89, 4.235], [3.99, 4.12], [4.08, 5.02], [4.64, 5.01]]);
	var c11down = bez_curve([[4.89, 4.235+body_thick], [4+body_thick, 4.14], [4.1+body_thick, 5.02], [4.64, 5.01-body_thick]]);
	var c11sup = bez_sup([c11down, c11up]);
	var c11 = EXTRUDE([body_depth])(c11sup);
		
	var c12up = bez_curve([[4.64, 5.01], [5.09, 4.99], [5.2, 3.98], [5.4, 3.73]])
	var c12down = bez_curve([[4.64, 5.01-body_thick], [5.09-body_thick, 4.99], [5.2-body_thick, 3.98], [5.4-body_thick, 3.73]])
	var c12sup = bez_sup([c12up, c12down]);
	var c12 = EXTRUDE([body_depth])(c12sup);

	var c13up = bez_curve([[5.4, 3.73], [5.6, 3.43], [5.63, 3.61], [7.18, 3.84]])
	var c13down = bez_curve([[5.4-body_thick, 3.73], [5.6, 3.43-body_thick], [5.63, 3.61-body_thick], [7.18, 3.84-body_thick]])
	var c13sup = bez_sup([c13up, c13down]);
	var c13 = EXTRUDE([body_depth])(c13sup);
	
	var c14up = bez_curve([[7.18, 3.84], [7.78, 3.82], [7.25, 2.76], [6.745, 3.58]])
	var c14down = bez_curve([[7.18, 3.84-body_thick], [7.75-body_thick, 3.79], [7.25, 2.8+body_thick], [6.745+body_thick, 3.58]]);
	var c14sup = bez_sup([c14up, c14down]);
	var c14 = EXTRUDE([body_depth])(c14sup);
	
	var body = STRUCT([c11,c12,c13,c14]);
	s.push(COLOR(colorInt)(body));

	//laterals chair
	var c21up = bez_curve([[4.5, 4.28], [5.54, 4.36], [6.48, 4.46], [6.64, 4.43]]);
	var c21down = bez_curve([[4.5, 4.28-lateral_thick], [5.54, 4.36-lateral_thick], [6.48, 4.46-lateral_thick], [6.64, 4.43-lateral_thick]]);
	var c21sup = bez_sup([c21up, c21down]);
	var c21nt = EXTRUDE([lateral_depth])(c21sup);
	var c21 = T([2])([-lateral_depth])(c21nt);

	var c22up = bez_curve([[6.64, 4.43], [6.96, 4.48], [6.77, 4.03], [6.82, 3.58]]);
	var c22down = bez_curve([[6.64, 4.43-lateral_thick], [6.9, 4.45-lateral_thick], [6.79-lateral_thick, 4.03], [6.82-lateral_thick, 3.58]]);
	var c22sup = bez_sup([c22up,c22down]);
	var c22nt = EXTRUDE([lateral_depth])(c22sup);
	var c22 = T([2])([-lateral_depth])(c22nt);

	var c23up = bez_curve([[6.82, 3.58], [7.29, 3.03], [6.82, 3.58], [7.29, 3.03]]);
	var c23down = bez_curve([[6.82-lateral_thick, 3.58], [7.29-lateral_thick, 3.03], [6.82-lateral_thick, 3.58], [7.29-lateral_thick, 3.03]]);
	var c23sup = bez_sup([c23up,c23down]);
	var c23nt = EXTRUDE([lateral_depth])(c23sup);
	var c23 = T([2])([-lateral_depth])(c23nt);

	var c24up = bez_curve([[7.19, 2.6], [4.59, 2.6], [7.19, 2.6], [4.57, 2.6]]);
	var c24down = bez_curve([[7.19, 2.6+lateral_thick], [4.59, 2.6+lateral_thick], [7.19, 2.6+lateral_thick], [4.57, 2.6+lateral_thick]]);
	var c24sup = bez_sup([c24up,c24down]);
	var c24nt = EXTRUDE([lateral_depth])(c24sup);
	var c24 = T([2])([-lateral_depth])(c24nt);

	var c25up = bez_curve([[4.57, 2.6], [4.31, 2.6], [4.31, 3], [4.31, 3.45]]);
	var c25down = bez_curve([[4.57, 2.6+lateral_thick], [4.39, 2.6+lateral_thick], [4.31+lateral_thick, 3], [4.31+lateral_thick, 3.45]]);
	var c25sup = bez_sup([c25up,c25down]);
	var c25nt = EXTRUDE([lateral_depth])(c25sup);
	var c25 = T([2])([-lateral_depth])(c25nt);

	var c26up = bez_curve([[4.31,3.45],[4.31, 4.19],[4.31,4.28],[4.5,4.28]]);
	var c26down = bez_curve([[4.31+lateral_thick,3.45],[4.31+lateral_thick, 4.19],[4.39,4.28-lateral_thick],[4.5,4.28-lateral_thick]]);
	var c26sup = bez_sup([c26up,c26down]);
	var c26nt = EXTRUDE([lateral_depth])(c26sup);
	var c26 = T([2])([-lateral_depth])(c26nt);

	var c27up = bez_curve([[7.29, 3.03],[7.45, 2.86],[7.35, 2.62],[7.19, 2.6]]);
	var c27down = bez_curve([[7.29-lateral_thick, 3.03],[7.43-lateral_thick, 2.86],[7.33, 2.62+lateral_thick],[7.19, 2.6+lateral_thick]]);
	var c27sup = bez_sup([c27up, c27down]);
	var c27nt = EXTRUDE([lateral_depth])(c27sup);
	var c27 = T([2])([-lateral_depth])(c27nt);

	var lateral = COLOR(ColorLateral)(STRUCT([c21,c22,c23,c24,c25,c26,c27]));
	s.push(lateral);
	s.push(T([2])([body_depth+lateral_depth])(lateral));

	//birches' chair
	var birch1 = T([0,1])([4.31,3.45])(CUBOID([lateral_thick,2*lateral_thick,body_depth]));
	s.push(COLOR(ColorLateral)(birch1));
	
	var birch20 = T([0,1,2])([4.31+0.68,3.72,-lateral_depth])(CUBOID([lateral_thick*4,lateral_thick/2, body_depth+2*lateral_depth]));
	var birch2 = COLOR(colorInt)(R([0,1])([PI/33])(birch20));
	s.push(birch2);

	var birch30 = COLOR(colorInt)(R([0,1])([-6.5*PI/24])(CUBOID([lateral_thick*4,lateral_thick/2, body_depth+2*lateral_depth])));
	var birch3 = T([0,1,2])([6.715, 3.555,-lateral_depth])(birch30)
	s.push(birch3);

	var centroide = function(obj) { return T([0,1])([-4.57,-2.6])(obj); }
	return centroide(STRUCT(s));
}

colorI = [139/255,69/255,19/255];
colorL = [255/255,211/255,155/255];
var p = paimio_chair(colorI, colorL);
DRAW(p);