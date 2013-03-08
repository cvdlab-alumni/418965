function push_random(n) {

	var a = [];
	for(var i = 0; i< n; i++){
		a[i] = parseInt(Math.random() * 100);
		}
	return a;
}

var array = push_random(10);

var pari = array.filter(function (item) { return (item %2) === 0});

var compara = function(a,b) { return a - b };

var total = pari.sort(compara);