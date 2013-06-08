from pyplasm import *
import random
import numpy

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

##funzione di supporto -> circonferenza con bezier
def cerchio(r,h):
	def cerchio0(v):
		return [r*COS(v[0]), r*SIN(v[0]), h];
	return cerchio0;


def cono(r,h1,h2):
	def cono0(l):
		domain_cono = PROD([INTERVALS(2*PI)(l[0]),INTERVALS(1)(l[1])])
		c = cerchio(r, h1)
		base = T([3])([h1])(CIRCLE(r)([12,1]))
		s = MAP(BEZIER(S2)([c, [0, 0, h1+h2]]))(domain_cono)
		return STRUCT([s, base])
		
	return cono0


def trunk(r, h, d):
	return CYLINDER([r,h])(d)


def albero(r1,h1,h2,r2):
	tronco = trunk(r1,h1,12)
	corpo = cono(r2,h1,h2)([12,1])
	albero0 = STRUCT([tronco, corpo])
	return STRUCT([S([1,2,3])([0.05,0.05,0.05])(albero0)])



def forest(subset):

	array = list()
	xi = subset[0] ##con xi<xf
	xf = subset[1]
	yi = subset[2] ##con yi<yf
	yf = subset[3]

	for i in numpy.arange(xi,xf,0.5):
		for j in numpy.arange(yi,yf,0.5):
			r1 = 1*(random.random()+1)
			h1 = 3*(random.random()+1)
			h2 = 5*(random.random()+1)
			r2 = 2*(random.random()+1)
			array.append(T([1,2,3])([i,j+1,SIN(i*j)*COS(i*j)/10])(T([1,2])([0.05,0.05])(albero(r1,h1,h2,r2))))

	return array


forests = STRUCT(forest([0,1,4*PI-1,4*PI+1]))


model_complete = STRUCT([forests, lake, model])

VIEW(model_complete)
