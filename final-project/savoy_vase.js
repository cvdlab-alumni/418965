//domini 
var dom1D = INTERVALS(1)(50);
var dom2D = PROD1x1([dom1D,dom1D]);

//generalizzazione per la creazione di superfici
var bez_sup = function(curves){
	return MAP(BEZIER(S1)(curves))(dom2D);} 

function generateKnot(controlPoints){
  lun = controlPoints.length + 2 + 1;
  //var nodeSeq =  new Array(lun);
  var nodeSeq = []
  nodeSeq[0] = 0;
  nodeSeq[1] = 0;
  nodeSeq[2] = 0;
  for (i = 3; i <= lun - 4 ; i++) {
    nodeSeq[i] = i-2;
  };
  nodeSeq[lun-1] = i-2
  nodeSeq[lun-2] = i-2
  nodeSeq[lun-3] = i-2
  return nodeSeq
}

function genNUBS (controlPoints){
  var domain = INTERVALS(1)(50)
  var knots = generateKnot(controlPoints)
  var nubs = NUBS(S0)(2)(knots)(controlPoints)
  var curve = MAP(nubs)(domain)
  return [curve,nubs]
}

var savoy_vase = function(color1,color2){
		var vase_length = 0.1;
		var s = [];

		//bourdeline's vase
		var points1 = [[6.62, 4.11], [6.46, 4.26], [6.03, 4.5],[5.62, 4.4],[5.28, 3.99],[5.28, 3.55],[5.58, 3.16], 
						[6.08, 2.88],[6.32, 2.78],[6.5, 2.51],
							[6.55, 2.33],[6.71, 1.81], [6.79, 1.66],[6.93, 1.54],[7.22, 1.39], [7.41, 1.39]];

		var points2 = [[7.41,1.39], [7.74,1.44], [8.07,1.51], [8.45, 1.99],[8.51, 2.74], [9.22, 3.43],[9.47, 3.98],
						  [9.24, 4.89], [8.8, 5.24],[8.54, 5.19],[8.51, 5.15]];

		var points3 = [[6.62,4.11],[6.82, 3.89],[7.17, 4.05],[7.43, 4.32],[7.6, 4.62],[7.93, 4.57],
	 						[8.12, 4.64],[8.21, 4.85],[8.51,5.15]];
		
		var vasoup1 = genNUBS(points1); // curve=[0] nubs=[1] 
		var vasoup2 = genNUBS(points2);
		var vasoup3 = genNUBS(points3);

		
		var points4 = [[6.62-vase_length, 4.11], [6.46-vase_length, 4.26], [6.03, 4.5-vase_length],[5.62, 4.4-vase_length],
					 	[5.28+vase_length, 3.99], [5.28+vase_length, 3.55], [5.58+vase_length, 3.16],
					 	[6.12+vase_length, 2.88],[6.32+vase_length, 2.78],[6.5+vase_length, 2.51],
					 	[6.55+vase_length, 2.33],[6.71+vase_length, 1.81], [6.79+vase_length,1.66],
					 	[6.93+vase_length, 1.57], [7.22, 1.39+vase_length], [7.41, 1.39+vase_length]];

		var points5 = [[7.41, 1.39+vase_length], [7.74,1.44+vase_length], [8,1.5+vase_length],
						 [8.45-vase_length, 1.99], [8.51-vase_length, 2.74], [9.22-vase_length, 3.43],
						 [9.47-vase_length, 3.98],	[9.24-vase_length, 4.89], [8.8, 5.24-vase_length],
						 [8.54, 5.19-vase_length],[8.51, 5.15-vase_length]];

		var points6 = [[6.62-vase_length,4.11],[6.82, 3.89-vase_length],[7.17, 4.05-vase_length],[7.43, 4.32-vase_length],
						[7.6, 4.62-vase_length],[7.93, 4.57-vase_length], [8.12, 4.64-vase_length],	[8.51, 5.15-vase_length]];

		var vasodown1 = genNUBS(points4);
		var vasodown2 = genNUBS(points5);
		var vasodown3 = genNUBS(points6);
	
	var bord_sup1 = bez_sup([vasoup1[1],vasodown1[1]]); 
	var bord_sup2 = bez_sup([vasoup2[1],vasodown2[1]]); 
	var bord_sup3 = bez_sup([vasoup3[1],vasodown3[1]]);

	var border = STRUCT([bord_sup1,bord_sup2,bord_sup3])
	s.push(COLOR(color1)(border));
	
	//bottom's vase
	var bottom_sup1 = bez_sup([vasoup1[1],vasoup2[1]]);
	var bottom_sup2 = bez_sup([vasoup2[1],vasoup3[1]]);

	var bottom = T([2])([2.5])(COLOR(color1)(STRUCT([bottom_sup1,bottom_sup2])));
	s.push(bottom);
	
	//body's vase
	var body = COLOR(color2)(EXTRUDE([2.5])(border));
	s.push(body)
	
	//posizionamento
	var vase = R([1,2])([PI])(STRUCT(s));
	return T([0,1,2])([-2,5,2.5])(vase);
	
};

colorBody = [1,0,0,0.9];
colorBord = [1,0,0];
var v = savoy_vase(colorBord, colorBody);
DRAW(v);