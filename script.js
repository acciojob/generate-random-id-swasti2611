function makeid(l) {
  // write your code here
	let res="";
	let charList="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for (let index = 0; index <l ; index++) {
		 res+=charList.charAt(
			 Math.floor(
			 Math.random()*charList.length;
		 )
		)
		
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.") ;
 alert(makeid(l));

