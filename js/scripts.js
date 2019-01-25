//test script that will take in 5 and return an array starting from 0 and counting up 5
//this will help to see what needs to happen during a loop

var number = 5;
var array = [];


//this will create a for loop to produce an array doing the same thing as the previous code but for any number.
for(i=0; i<=number; i+=1) {
  array.push(number - i);
}

array = array.reverse();
console.log(array);

//beginning to implement user interface logic to display results to index.html
$(document).ready(function(){
  $("form#beepbooper").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    console.log(number);

  });


});
