// Esercizio1 in PLASM.JS

//pilastri del primo piano

var cilindro = T([0,1])([0.25,0.25])(CYL_SURFACE([0.25,2.36+0.14])(36))

var cilindri_riga  = STRUCT(REPLICA(5)([cilindro,T([0])([0.5+4.7])]))
var cilindri_sup = T([1,2])([0.5+9.1,0.14])(cilindro)
var cilindri = STRUCT([cilindri_riga,cilindri_sup])

var pil = CUBOID([0.5,0.5,2.36])

var pila1 = T([0,1,2])([2.7,9.6,0.14])(pil)
var pila_riga = T([1,2])([9.6,0.14])(STRUCT(REPLICA(3)([T([0])([0.5+4.7]),pil])))
var pile = STRUCT([pila1,pila_riga])

var pillars0 = STRUCT([cilindri,pile])


//pilastri del secondo piano

var pile_sup = STRUCT(REPLICA(5)([pil,T([0])([5.2])]))
var pile_sup2 = T([1])([9.6])(STRUCT(REPLICA(3)([pil,T([0])([5.2])])))
var cil_sup  = T([0,1])([0.5+4.7+0.5+4.7+0.5+4.7,0.5+9.1])(cilindro)
var pila2 = T([0,1])([0.5+4.7+0.5+4.7+0.5+4.7+0.5+4.7,9.6])(pil)

var mini_pilastro = S([0,1])([0.5,0.5])(pil)
var mini_pil = T([0,1])([0.5+0.9,9.6])(mini_pilastro)

var pillars1 = T([2])([0.14+2.36+0.14])(STRUCT([pile_sup,pile_sup2 ,cil_sup ,pila2, mini_pil]))



//pilastri del terzo piano

var pile3 = T([1,2])([9.6,0.14+((2.36+0.14)*2)])(pile_sup)
var pile31 = STRUCT([T([2])([0.14+((2.36+0.14)*2)]),pil,T([0])([0.5+4.7]),pil,T([0])([1.5+4.7+4.7+4.7]),pil])
var pillars2 = STRUCT([pile3, pile31])



//pilastri del quarto piano

var mini_pilastro4 = T([1,2])([9.85,0.14+((2.36+0.14)*3)])(mini_pilastro)
var mini_pilastro42 = T([0,1,2])([0.5+4.7,0.5+9.1+0.25,0.14+((2.36+0.14)*3)])(mini_pilastro)
var pila4 = STRUCT([T([0,1,2])([0.5+4.7+0.5+4.7,0.5+9.1,0.14+((2.36+0.14)*3)]),pil,T([0])([0.5+4.7]),pil,T([0])([0.5+4.7]),pil])
var pila42 = STRUCT([T([0,2])([0.5+4.7+0.5+4.7,0.14+((2.36+0.14)*3)]),pil,T([0])([0.5+4.7+0.5+4.7]),pil])
var pillars3 = STRUCT([mini_pilastro4, mini_pilastro42, pila4 ,pila42])



DRAW(STRUCT([pillars0,pillars1,pillars2,pillars3]))
