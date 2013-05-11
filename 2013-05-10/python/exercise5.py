#domini 
#dom1D = GRID([10])
#dom2D = GRID([20,20])
dom1D = INTERVALS(1)(32)
dom2D = PROD([dom1D, dom1D])

#funzione generale che costruisce la curva
def bez_curve_nomap(controlpoints):
	return BEZIER(S1)(controlpoints)

#generalizzazione per la creazione di superfici
def bez_sup(curves):
	return MAP(BEZIER(S2)(curves))(dom2D)

#centralizzazione della struttura -> vedi exercise2
centroide = T([1,2,3])([-SIZE([1])(scocca0)[0]/2, -SIZE([2])(scocca0)[0]/2-1.9, SIZE([3])(scocca0)[0]/2])

#cofano anteriore
C2an5 = bez_curve_nomap([[5.41,3.97,-0.15],[6,3.97,-0.15],[6,3.97,-3+0.15],[5.51,3.97,-3+0.15]])

C2an4 = bez_curve_nomap([[8.5,3.24,-1.5+0.15],[8.6,3.24,-1.5+0.15],[8.6,3.24,-1.5-0.15],[8.5,3.24,-1.5-0.15]])

cofano = COLOR(RED)(bez_sup([C2an5, C2an4]))

#parabrezza anteriore
C2an6 = bez_curve_nomap([[5.41,3.97,-0.15],[5.41,4.03,-3+0.1],[5.41,4.03,-0.1],[5.41,3.97,-3+0.15]])

C2an7 = bez_curve_nomap([[4.5,4.6,-0.3],[4.5,4.65,-3+0.2],[4.5,4.65,-0.2],[4.5,4.6,-3+0.3]])

parabrezza = COLOR(CYAN)(bez_sup([C2an5,C2an6, C2an7]))

##cofano anteriore laterali
C2an8 = bez_curve_nomap([[5.51,3.97,0],[6.2, 4.05,0],[8.3, 3.24,0]])

C2an9 = bez_curve_nomap([[5.41,3.97,-0.15],[8.6,3.24,-1.5],[5.41,3.97,-0.15],[8.6,3.24,-1.5]])

cofano_dx = COLOR(RED)(bez_sup([C2an8,C2an9]))

C2an10 =bez_curve_nomap([[5.41,3.97,-3],[6.2, 4.05,-3],[8.3, 3.24,-3]])

C2an11 = bez_curve_nomap([[5.51,3.97,-3+0.15],[8.6,3.24,-3+1.5],[5.41,3.97,-3+0.15],[8.6,3.24,-3+1.5]])

cofano_sx = COLOR(RED)(bez_sup([C2an10,C2an11]))

##tettuccio

C2an12 = bez_curve_nomap([[3.5,4.6,-0.4],[3.5,4.6,-3+0.4],[3.5,4.6,-0.4],[3.5,4.6,-3+0.4]])

tetto = COLOR(RED)(bez_sup([C2an7,C2an12]))

#parabrezza posteriore

C2an13 = bez_curve_nomap([[1.55,3.97,-0.9],[1.55,3.97,-3+0.9],[1.55,3.97,-0.9],[1.55,3.97,-3+0.9]])

C2an14 = bez_curve_nomap([[1.55,3.97,-0.9],[1,3.97,-0.9],[1,3.97,-3+0.9],[1.55,3.97,-3+0.9]])

parabrezza_post = COLOR(CYAN)(bez_sup([C2an12, C2an13, C2an14]))

#cofano posteriore con laterali

C2an15 = bez_curve_nomap([[0.39, 3.97,0],[0.39, 3.97,-3],[0.39, 3.97,0],[0.39, 3.97,-3]])

cofano_post1 = bez_sup([C2an14, C2an15])

C2an16 = bez_curve_nomap([[3.5,4.6,-0.2-0.2],[0.39, 3.97,0],[3.5,4.6,-0.2-0.2],[0.39, 3.97,0]])

C2an17 = bez_curve_nomap([[3.5,4.6,-0.2-0.2],[1.55,3.97,-0.9],[3.5,4.6,-0.2-0.2],[1.55,3.97,-0.9]])

cofano_post2 = bez_sup([C2an16,C2an17])

C2an18 = bez_curve_nomap([[3.5,4.6,-3+0.2+0.2],[1.55,3.97,-3+0.9],[3.5,4.6,-3+0.2+0.2],[1.55,3.97,-3+0.9]])

C2an19 = bez_curve_nomap([[3.5,4.6,-3+0.2+0.2],[0.39, 3.97,-3],[3.5,4.6,-3+0.2+0.2],[0.39, 3.97,-3]])

cofano_post3 = bez_sup([C2an18,C2an19])

cofano_post = COLOR(RED)(STRUCT([cofano_post1, cofano_post2,cofano_post3]))

C2anlato1 = bez_curve_nomap([[3.53,4.01,-0.2],[0.39, 3.97,0],[3.53,4.01,-0.2],[0.39, 3.97,0]])

C2anlato2 = bez_curve_nomap([[3.53,4.01,0],[0.39, 3.97,0],[3.53,4.01,0],[0.39, 3.97,0]])

lato1 = COLOR(RED)(bez_sup([C2anlato1,C2anlato2]))

lato11 = COLOR(RED)(bez_sup([C2anlato1,C2an17]))

C2anlato11 = bez_curve_nomap([[3.53,4.01,-3+0.2],[0.39, 3.97,-3],[3.53,4.01,-3+0.2],[0.39, 3.97,-3]])

C2anlato22 = bez_curve_nomap([[3.53,4.01,-3],[0.39, 3.97,-3],[3.53,4.01,-3],[0.39, 3.97,-3]])

lato2 = COLOR(RED)(bez_sup([C2anlato11,C2anlato22]))

lato22 = COLOR(RED)(bez_sup([C2anlato11,C2an18]))

#finestrino destro + apriporta

C2findx1 = bez_curve_nomap([[3.5,4.6,-0.2-0.2],[4.5,4.6,-0.3],[3.5,4.6,-0.2-0.2],[4.5,4.6,-0.3]])

C2findx2 = bez_curve_nomap([[3.53,4.01,-0.2],[5.41,3.97,-0.15],[3.53,4.01,-0.2],[5.41,3.97,-0.15]]) 

finestradx = COLOR(CYAN)(bez_sup([C2findx1,C2findx2]))

C2aprdx1 = bez_curve_nomap([[3.53,4.01,0],[5.51,3.97,0],[3.53,4.01,0],[5.51,3.97,0]])

aprdx = COLOR(RED)(bez_sup([C2findx2,C2aprdx1]))

#finestrino sinistro + apriporta
C2finsx1 = bez_curve_nomap([[3.5,4.6,-3+0.2+0.2],[4.5,4.6,-3+0.3],[3.5,4.6,-3+0.2+0.2],[4.5,4.6,-3+0.3]])

C2finsx2 = bez_curve_nomap([[3.53,4.01,-3+0.2],[5.5,3.97,-3+0.15],[3.53,4.01,-3+0.2],[5.5,3.97,-3+0.15]]) 

finestrasx = COLOR(CYAN)(bez_sup([C2finsx1,C2finsx2]))

C2aprsx1 = bez_curve_nomap([[3.53,4.01,-3],[5.51,3.97,-3],[3.53,4.01,-3],[5.51,3.97,-3]])

aprsx = COLOR(RED)(bez_sup([C2aprsx1, C2finsx2]))

#totale
superfici0 = STRUCT([cofano,cofano_dx,cofano_sx,parabrezza,tetto,parabrezza_post,cofano_post,finestradx,aprdx,finestrasx,aprsx,lato1,lato11,lato2,lato22])

superfici = centroide(superfici0)

VIEW(STRUCT([superfici,scocca,ruote,volante]))

