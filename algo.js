var argumentsLength = function(...args) {
	console.log(arguments)
	console.log(args.length);
 };
 
 argumentsLength(1,2,3)


 function evenOrOdd(number) {
	return number % 2 === 0 ? 'Even' : "Odd"
 }
 console.log(evenOrOdd(-2));
 


function makeNegative(num) {
	return  num < 0 ? num :  -num
}
 console.log( makeNegative(-3));
 