//test script that will take in 5 and return an array starting from 0 and counting up 5
//this will help to see what needs to happen during a loop

var number = 5;
var array = [];


// array.push(number);
// array.push(number-1);
// array.push(number-2);
// array.push(number-3);
// array.push(number-4);
// array.push(number-number)
// console.log(array.reverse());

//this will create a for loop to produce an array doing the same thing as the previous code but for any number. 
for(i=0; i<=number; i+=1) {
  array.push(number - i);
}

array = array.reverse();
console.log(array);
