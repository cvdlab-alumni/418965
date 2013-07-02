//modo per fare tubo curvo
var dom1D = INTERVALS(1)(30);
var dom2D = PROD1x1([dom1D,dom1D]);
var b11 = BEZIER(S0)([[0,0,0], [0,5,0],[2,7,0]]);
var b21 = BEZIER(S0)([[2, 0, 0], [2, 5,0],[4,7,0]]);
var sur1 = CUBIC_HERMITE(S1)([b11,b21,[0,0,-2],[0,0,2]]);
var sur2 = CUBIC_HERMITE(S1)([b11,b21,[0,0,2],[0,0,-2]])
sur1 = MAP(sur1)(dom2D);
DRAW(sur1)
sur2 = MAP(sur2)(dom2D);
DRAW(sur2)