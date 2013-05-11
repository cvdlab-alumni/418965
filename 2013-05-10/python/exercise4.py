#domini 
dom1D = INTERVALS(1)(32)
dom2D = PROD([dom1D, dom1D])

#funzione generale che costruisce la curva
def bez_curve_nomap(controlpoints):
	return BEZIER(S1)(controlpoints)


#generalizzazione per la creazione di superfici
def bez_sup(curves):
	return MAP(BEZIER(S2)(curves))(dom2D)


posiz = T([1,2])([1.77, 4.05])

manubrio = COLOR(BLACK)(posiz(TORUS([1.2,1.1])([36,36])))

h = SIZE([3])(manubrio)[0]

manubrio_centro = COLOR(BLACK)(posiz(CYLINDER([0.4,h/2])(42)))

manubrio_oblo = posiz(DIFF([CYLINDER([0.3,h/2])(42),CYLINDER([0.25,h/2])(42)]))

man_up = COLOR(BLACK)(T([1,2])([1.77+1.1,4.3])(CUBOID([-1.1*2,-0.4,h/2])))

man_down = COLOR(BLACK)(T([1,2])([1.77+0.2,3.75])(CUBOID([-0.35,-0.85,h/2])))

volante0 = STRUCT([manubrio, manubrio_centro, manubrio_oblo,man_down,man_up])


##inserimento volonte nella vettura

volante1 = R([1,3])(PI/2)(volante0) 

volante2 = S([1,2,3])([0.25,0.25,0.25])(volante1)

volante = T([1,3])([1,-1])(volante2)

VIEW(STRUCT([scocca,ruote,volante]))
