//prendendo come riferimento: http://en.wikipedia.org/wiki/Wavefront_.obj_file


var lar_to_obj = function(modello){

	var V = modello[0];

	var FV = modello[1];

	var s = "List of Vertices \n";

		for (var i = 0; i < V.length; i++){

			if (V[i][3] == null){
				s += "v "+V[i][0]+" "+V[i][1]+ " " + V[i][2] + " 1.0\n";}
			
			else {s += "v "+V[i][0]+" "+V[i][1]+" "+V[i][2]+ " " + V[i][3]+"\n"; }
				
		};
	s += "\n Face Definitions \n";
		for (var i = 0; i < FV.length; i++){
			s += "f "+FV[i][0]+" "+FV[i][1]+" "+FV[i][2]+" "+FV[i][3]+"\n";
		};

	return(s);
}



var l = lar_to_obj([[[0,0,3],[1,2,3]],[[5,4,6,8],[4,3,2,9]]]);

l

