	
	function identity(n) {
		var s="";
		for (var i = 1; i<=n; i++){
            for(var j =1; j<=n; j++){
            	if(i===j){
            		s+="1"+" ";
            	}
            	else{
            		s+="0"+" ";
            	}
            }
		}
	console.log(s);
	 }