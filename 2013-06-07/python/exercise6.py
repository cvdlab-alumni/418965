## prendendo come riferimento: http://en.wikipedia.org/wiki/Wavefront_.obj_file

from pyplasm import *
import numpy

def lar_to_obj(modello):

	V = modello[0];
	FV = modello[1];
	s = "List of Vertices \n";

	for i in numpy.arange(0,len(V),1)

		if (V[i][3] == None): s += "v "+str(V[i][0])+" "+str(V[i][1])+ " " + str(V[i][2]) + " 1.0\n"
			
		else: s += "v "+str(V[i][0])+" "+str(V[i][1])+" "+str(V[i][2])+ " " + str(V[i][3])+"\n"
				
		
	s += "\n Face Definitions \n"
		for i in numpy.arange(0,len(FV),1):
			s += "f "+str(FV[i][0])+" "+str(FV[i][1])+" "+str(FV[i][2])+" "+str(FV[i][3])+"\n"
		

return(s)




l = lar_to_obj([[[0,0,3],[1,2,3]],[[5,4,6,8],[4,3,2,9]]]);

print(l)


