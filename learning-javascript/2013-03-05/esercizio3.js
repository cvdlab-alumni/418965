for(var i=1; i<=10; i++){ 
	var s="";
	for(var j=1; j<=10; j++){
		
		if(j===i)
			s+="1,"+"\t";
		else
			s+="0,"+"\t";
	}
console.log(s);
}
