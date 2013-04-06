//esercizio2.js

//definizione della funzione GRID e MKPOL
GRID = SIMPLEX_GRID
MKPOL = SIMPLICIAL_COMPLEX

//pavimento del primo piano -> floor0

var sector01 = GRID([[0.5+2.2+0.5],[-0.5-9.1,0.5+1.8+0.5],[0.14]])
var sector02 = GRID([[-0.5-2.2,0.5+2+0.5+4.7+0.5+4.7+0.5],[-0.5-3.6,1.7+1.5+0.5+1.8+0.5+1.8+0.5],[0.14]])
var sector03 = GRID([[-0.5-2.2-0.5-2-0.5-4.7-0.5-4.7-0.5,0.6],[-0.5-3.6-1.7,1.5],[0.14]])
var sector04 = GRID([[-0.5-2.2-0.5-2-0.5-4.7-0.5-4.7-0.5,1.9],[-0.5-3.6-1.7-1.5,0.5+1.8+0.5+1.8+0.5],[0.14]])
var sector05 = GRID([[-0.5-2.2,0.5+1.2+0.5],[-0.5-3.6+0.7,0.7],[0.14]])
//settori circolari del pavimento
var sector06 = T([0,1])([0.5+2.2+0.5+2+0.5+4.7+0.5+4.7+0.5+1.9,-2.55+0.5+9.1+0.5+1.8+0.5])(CYL_SURFACE([2.55,0.14])([36,1]))
var sector07 = T([0,1])([-1.1+0.5+2.2+0.5+1.2+0.5,0.5+3.6-0.7])(CYL_SURFACE([1.1,0.14])([36,1]))

var floor0 = STRUCT([sector01,sector02,sector03,sector04,sector05,sector06,sector07])

// pavimento del secondo piano -> floor1

var sector11 = GRID([[0.25,-0.25-0.9,1.3+0.5+2+((0.5+4.7)*3)+0.5],[-0.5,9.1],[0.14]])
var sector12 = GRID([[0.5+1.7+0.5+0.5+2+0.5,-4.7-0.5-0.5,4.2+0.5+4.7+0.5],[-0.5-9.1-0.25-0.25,1.8],[0.14]])
var sector13 = GRID([[((0.5+4.7)*4)+0.5],[-0.5-9.1-0.25-0.25-1.8,+0.5],[0.14]])
var sector14 = GRID([[((0.5+4.7)*4)+0.5],[-0.5-9.1,0.5],[0.14]])
var sector15 = GRID([[((0.5+4.7)*4)+0.5],[0.5],[0.14]])

var balcone = T([0,1])([-2.2,0.5+9.1+0.3])(CUBOID([2.2,2,0.14]))

var floor1 = T([2])([2.36+0.14])(STRUCT([sector11,sector12,sector13, sector14, sector15, balcone]))

// pavimento del terzo piano -> floor2

var sector21 = GRID([[((0.5+4.7)*4)+0.5],[-0.5-9.1-0.5-1.8,0.5],[0.14]])
var sector22 = GRID([[0.5,-2.2-0.5-2-0.5-3.3,1.4+0.5+4.7+0.5+4.7+0.5],[-0.5-9.1-0.25,0.25+1.8],[0.14]])
var sector23 = GRID([[0.5+0.9+0.25,-1.05-0.5-2,0.5],[-0.5-9.1,0.25],[0.14]])
var sector24 = GRID([[0.5,-0.9,1.3+0.5+2+0.5+4.7+0.5+4.7+0.5+4.7+0.5],[-0.5-9.1-0.25,0.25],[0.14]])

//perimetro e EXTRUDE del pavimento poligonale

var poligono = MKPOL([[10.4,0.5],[10.4+0.5+4.7+0.5+4.7+0.5,0.5],[10.4+0.5+4.7+0.5+4.7+0.5,0.5+9.1+0.25],[10.4-1.9,0.5+9.1+0.25]])([[0,1,2],[1,2,3]])
var sector25 = EXTRUDE([0.14])(poligono)

var sector26 = GRID([[((0.5+4.7)*4)+0.5],[+0.5],[0.14]])
var sector27 = GRID([[0.25],[-0.5,9.1],[0.14]])

var floor2 = T([2])([(2.36+0.14)*2])(STRUCT([sector21,sector22,sector23,sector24,sector25,sector26,sector27]))

// pavimento del quarto piano -> floor3

var sector31 = GRID([[((0.5+4.7)*4)+0.5],[0.5+9.1+0.25+0.25],[0.14]])
var sector32 = GRID([[0.5+1.7+0.5+0.5+2+0.5+4.7+0.5,-4.7-0.5-0.5,+4.2+0.5],[-0.5-9.1-0.25,0.25+1.8],[0.14]])
var sector33 = GRID([[((0.5+4.7)*4)+0.5],[-0.5-9.1-0.25-0.25-1.8,+0.5],[0.14]])

var floor3 = T([2])([(2.36+0.14)*3])(STRUCT([sector31,sector32,sector33]))

// pavimento del quinto piano -> floor4

var sector41 = GRID([[((0.5+4.7)*4)+0.5],[0.5],[0.14]])
var sector42 = GRID([[0.5,-4.7-0.5-4.7,((0.5+4.7)*2)+0.5],[-0.5,+9.1],[0.14]])
var sector43 = GRID([[((0.5+4.7)*4)+0.5],[-0.5-9.1,0.5+1.8+0.5],[0.14]])

var floor4 = T([2])([(2.36+0.14)*4])(STRUCT([sector41,sector42,sector43]))


//pavimento completo
var floors = STRUCT([floor0,floor1,floor2,floor3,floor4])


//prova di VIEW dell'edificio parziale (esercizio1+esercizio2)
//var build = STRUCT([floors, pillars_total])
//DRAW(build)