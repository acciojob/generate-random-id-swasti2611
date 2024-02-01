function makeid(l) {
  // write your code here
	let result=" "
let charList="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789"
for(var i=0;i<l;i++){
	result+=charList.charAt(
		Math.foor(Math.random()*charList/length);
	)
}
	return result


}  
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
