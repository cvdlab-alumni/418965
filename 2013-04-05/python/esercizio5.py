



step2d = MKPOL([[[0,0],[0,p],[p,a],[p,a+p]],[[1,2,3,4]],None])

step3d = MAP([S1,S3,S2])(PROD([step2d, Q(9)]))

//RAMPA DI SCALE

ramp = STRUCT(NN(13)([step3d, T([1,3])([2.66,1.25])]))

stair1 =

stair2 =

stair3 =