
//var result = "";
//this will create a for loop to produce an array doing the same thing as the previous code but for any number.
var array = [];
var resultArray = [];

function toArray(number) {
  for(i=0; i<=number; i+=1) {
  array.push(number - i);
  }
  array = array.reverse();
  console.log(array);
  return array
}

function beepBooper(number) {
  var newArray = toArray(number);
  console.log("Inside beepBooper" + newArray);
  newArray.forEach(function(num){
    if (num === 1) {
      resultArray.push("Beep!");
    } else if (num === 2) {
      resultArray.push("Boop!")
    } else if (num === 3) {
      resultArray.push("I'm sorry Dave. I'm afraid I can't do that.")
    } else {
      resultArray.push(num);
    }
  }) //end forEach loop
}; //end beepBooper

//beginning to implement user interface logic to display results to index.html
$(document).ready(function(){
  $("form#beepbooper").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    console.log(number);
    //store the result as a new variable * not needed as of yet
    var result = beepBooper(number);
    console.log(number);
    //print the populated array
    $("#results").text(resultArray);
  });
});
