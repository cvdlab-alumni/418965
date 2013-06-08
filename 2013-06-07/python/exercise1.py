from pyplasm import *
import random

domain = PROD([INTERVALS(20)(30),INTERVALS(21)(30)])

def height(dominio):
	x = dominio[0]
	y = dominio[1]
	z = SIN(x*y)*COS(x*y)

	if x<= 10: dz = x*y*random.random()/500 
	else: dz = x*y*random.random()/100
	
	return [x, y, dz+z]


model = COLOR(BROWN)(MAP(height)(domain))

VIEW(model)