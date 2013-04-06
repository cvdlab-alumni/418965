#ESERCIZIO4

GRID = COMP([INSR(PROD),AA(QUOTE)])

#east
e1 = GRID([[-3.2-1.7,0.2+((0.5+4.7)*2)+0.5],[-0.5-3.6,0.5],[0.14+1,-1,0.36]])
e2 = GRID([[-3.2-1.7,0.2+0.5+4.7,-0.5-4.7,0.5],[-0.5-3.6,0.5],[-0.14-1,1]])
e3 = GRID([[10.9],[0.5],[-2.5,6.34]])
e4 = GRID([[-10.9,4.7],[0.5],[-2.5,1.34,-1.16,1.34,-1.16,1.34]])
e5 = GRID([[-10.9,-4.7,5.7],[0.5],[2.5,1.34,1.16,1.34,1.16,1.34]])
e6 = GRID([[-10.4,0.5,-4.7,5.7],[0.5],[-7.5,2.5]])
e7 = GRID([[21.3],[0.5],[-10,0.5]])
east = STRUCT([e1,e2,e3,e4,e5,e6,e7])

finestra7 = COLOR(GREEN)(R([2,3])(PI/2)(CUBOID([10.4,1.17,0.25])))

finestra = COLOR(GREEN)(R([2,3])(PI/2)(CUBOID([4.7,1.17,0.25])))

finestra_trasl = T([1,2,3])([10.9,3.95,1.30])(finestra)

finestra1 = T([1,2,3])([10.9,0.25,2.5+1.36])(finestra)

finestre = STRUCT(NN(3)([finestra1,T([3])(2.5)]))

east_color = STRUCT([e1,e2,e3,e4,e5,e6,e7,finestra_trasl, finestre])

#prova di finestre colorate
#VIEW(east_color)

#prova totale
#build = STRUCT([pillars_total, floors, vert_partitions, east_color])
#VIEW(build)


