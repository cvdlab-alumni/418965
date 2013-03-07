	
	function identity(n) {
		var s='\n';
		for (var i = 1; i<=n; i++){
            for(var j =1; j<=n; j++){
            	if(i===j)
                  s+=1 +'\t'  		
            	else
            	s+=0+'\t';            		
            	}
            s+='\n';
      	}
      
		
	return s;
	 }
