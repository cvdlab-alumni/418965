/** SHOWCASE **/


/** funzione di supporto**/
var circle = function (r,h) {
	return function (v) {
		return [r*COS(v[0]), r*SIN(v[0]),h];
		};
	};


var domain = DOMAIN([[0,2*PI],[0,1]])([50,50]);

var dom1D = INTERVALS(1)(32);

var domain2D = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);

var mapping = function (curves){
	return MAP(BEZIER(S1)(curves))(domain)};


var CYLINDER = function(r,h){
	function C0(l){
		var s = CYL_SURFACE([r,h])(l);
		var b1 = DISK(r)(l);
		var b2 = T([2])([h])(b1);
		return STRUCT([s,b1,b2]);
		}
	return C0;
	};

/** lamp **/
	

var circle0 = circle(2,-1);

var circle1 = circle(1,3);

var circle2 = circle(6,-9);

var lamp_cover = T([0,2])([-1.5,10+0.1])(mapping([circle0,circle1]));

var light = COLOR([10,10,0,7])(T([0,2])([-1.5,10+0.1])(mapping([circle0,circle2])));

var c1 = BEZIER(S0)([[0.5,0,0],[1,2,0],[2,3,0],[2.2,4,0],[0,6,0]]);
var c2 = BEZIER(S0)([[-0.5,0,0],[-1,2,0],[-2,3,0],[-2.2,4,0],[0,6,0]]);
var c3 = BEZIER(S0)([[0,0,1],[0,2,1],[0,3,2.5],[0,4,3],[0,6,0]]);
var c4 = BEZIER(S0)([[0,0,-1],[0,2,-1],[0,3,-2.5],[0,4,-3],[0,6,0]]);
var c51 = circle(0.5,0);
var c5_map = MAP(c51)(DOMAIN([[0,2*PI]])([30]));
var c5 = R([1,2])([PI/2])(c5_map);

/** lampadina squadrata **/

var lampa1 = COLOR([10,10,0])(MAP(BEZIER(S1)([c1,c3,c2]))(domain2D));
var lampa2 = COLOR([10,10,0])(MAP(BEZIER(S1)([c2,c4,c1]))(domain2D));
var lampa5 = COLOR([0,0,0])(R([1,2])([PI/2])(CYLINDER(0.5,0.5)(30)));
var lampadina0 = STRUCT([lampa1,lampa2,c5,lampa5]);
var lampadina = STRUCT([T([0,1,2])([-1.5,0,11.6]),S([0,2])([0.9,0.5]),R([1,2])([-PI/2]),lampadina0]);


/** base **/

var base_est = mapping([circle(2,0),circle(2,-1),circle(3,0),circle(3,-1)]);

var chiusura_down = T([2])([-1])(DISK(3)(30));

var chiusura_up = (DISK(2)(30));

var base = STRUCT([base_est, chiusura_down,chiusura_up]);

/** telaio e giunzioni **/

var joint0 = STRUCT([T([1])([0.5]), R([1,2])([PI/2]),CYLINDER(0.3,1)(30)]);

var tel1 = STRUCT([R([0,2])([PI/13]),T([2])([-0.2]), CYLINDER(0.25,13)(30)]);

var joint1 = T([0,2])([3,6.9+5.5])(joint0);

var tel2 = STRUCT([R([0,2])([-PI/3]), T([0,2])([12.2,3.6]), CYLINDER(0.25,5)(30)]);

var joint2 = T([0,2])([-4.2,2.4])(joint1);

var raggio = CUBOID([0.1,1,0.1]);

var raggi = STRUCT(REPLICA(4)([raggio, R([0,1])([PI/2])]));

var tel31 = STRUCT([CYLINDER(0.25,5)(30), CYLINDER(0.5,1)(30), T([2])([1])(raggi)]);

var tel3 = T([0,2])([-1.5,12])(tel31);

var telaio = STRUCT([joint0, tel1,joint1,tel2,joint2,tel3]);

/** final complete model **/
var model = STRUCT([base,telaio,lamp_cover,lampadina]);

//DRAW(model)
