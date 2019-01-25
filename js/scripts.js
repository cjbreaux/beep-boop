
//var result = "";
//this will create a for loop to produce an array doing the same thing as the previous code but for any number.
var array = [];
var resultArray = [];
var resultString = "";
var outputArray = [];

function counter (number) {
  for(i=0; i<=number; i+=1) {
  array.push(number - i);
  }
  array = array.reverse();
  array.forEach(function(integer){
    resultArray.push(integer.toString());
  })
  //console.log(resultArray);
  return resultArray;
}

function beepBooper(number) {
  var arrayOfStrings = counter(number);
//  console.log(arrayOfStrings);

  arrayOfStrings.forEach(function(num){
    if (num.includes("1")) {
      outputArray.push("Beep!")
    } else if (num.includes("2")) {
      outputArray.push("Boop!")
    } else if (num.includes("3")) {
      outputArray.push("I'm sorry Dave.I can't do that right now.")
    }
    else { outputArray.push(num)}
  })

// console.log(outputString);
}; //end beepBooper

//beginning to implement user interface logic to display results to index.html
$(document).ready(function(){
  $("form#beepbooper").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
  //  console.log(number);
    //store the result as a new variable * not needed as of yet
    var result = beepBooper(number);
  //  console.log(number);
    //print the populated array
    $("#results").text(outputArray);
  });
});
