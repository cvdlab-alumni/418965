
function capitalized_string (stringa) { 

	
	stringa = stringa.charAt(0).toUpperCase().concat(stringa.slice(1,stringa.lenght).toLowerCase());

	return stringa;

}




var str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



function capitalized_all(stringa) {

	s = stringa.split(" ", stringa.length);	
	
	for (var i=0; i< s.length; i++){
		s[i] = capitalized_string(s[i]);
	}

	return s;
}

capitalized_all(str);