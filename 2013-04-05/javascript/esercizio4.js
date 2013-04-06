//ESERCIZIO4

GRID = SIMPLEX_GRID

//east -> ripreso dall'esercizio precedente
var e1 = GRID([[-3.2-1.7,0.2+((0.5+4.7)*2)+0.5],[-0.5-3.6,0.5],[0.14+1,-1,0.36]])
var e2 = GRID([[-3.2-1.7,0.2+0.5+4.7,-0.5-4.7,0.5],[-0.5-3.6,0.5],[-0.14-1,1]])
var e3 = GRID([[10.9],[0.5],[-2.5,6.34]])
var e4 = GRID([[-10.9,4.7],[0.5],[-2.5,1.34,-1.16,1.34,-1.16,1.34]])
var e5 = GRID([[-10.9,-4.7,5.7],[0.5],[2.5,1.34,1.16,1.34,1.16,1.34]])
var e6 = GRID([[-10.4,0.5,-4.7,5.7],[0.5],[-7.5,2.5]])
var e7 = GRID([[21.3],[0.5],[-10,0.5]])
var east = STRUCT([e1,e2,e3,e4,e5,e6,e7])

//aggiunte le finestre colorate

var finestra = COLOR([0,0,0])(R([1,2])(PI/2)(CUBOID([4.7,1.17,0.25])))

var finestra1 = T([0,1,2])([10.9,0.25,2.5+1.36])(finestra)
var finestre = STRUCT(REPLICA(3)([finestra1,T([2])(2.5)]))
var east_color = STRUCT([e1,e2,e3,e4,e5,e6,e7,finestre])

//prova di finestre colorate
//DRAW(east_color)

//prova totale
//var build = STRUCT([pillars_total, floors, vert_partitions, east_color])
//DRAW(build)
