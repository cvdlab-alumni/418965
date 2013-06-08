from pyplasm import *
import random

domain = PROD([INTERVALS(20)(30),INTERVALS(21)(30)])

def height(dominio):
	x = dominio[0]
	y = dominio[1]
	z = SIN(x*y)*COS(x*y)

	if x<= 10: dz = x*y*random.random()/5000 
	else: dz = x*y*random.random()/100
	
	return [x, y, dz+z]


model = MAP(height)(domain)


lake1 = T([1,2])([2*PI-1,6*PI-1])(CIRCLE(PI/2)([12,1]))

lake2 = T([1,2,3])([2*PI+0.4,2*PI+0.8,0.25])(CIRCLE(PI/1.5)([12,1]))

lake = STRUCT([COLOR(CYAN), Q(1), lake2, lake1])

model_lake = STRUCT([model,lake])

VIEW(model_lake);