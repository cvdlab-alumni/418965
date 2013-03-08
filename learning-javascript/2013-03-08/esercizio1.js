function riempimento (n) {

	var a = [];
	for (var i=0; i<=n; i++){
		a.push(i);
	}

	return a;

}


function pari (array){

    var ritorno = array.filter(function(item){ return item %2 === 0});   
    return ritorno; }

function double (array) {

	array.map(function(item) {return (item * 2)});

}

function divisione_4 (array){

	return array.filter(function(item) { return item %4 === 0});
}

function somma (array){
	return array.reduce(function(a,b) { return a+b});
}

