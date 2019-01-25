
var result = "";
var array = [];
var resultArray = [];
var resultString = "";
var outputArray = [];

//this function will take in a number and populate an array with numbers from 0 to that number. Then it will reverse the order of the numbers in the array, convert each number to a string, then populate a new array with strings instead of integers


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
  if (isNaN(number)){
    alert("Beep Boop! I can only read numbers!")
  }
  var arrayOfStrings = counter(number); //takes in user input and passes it through the counter function to return an array

  arrayOfStrings.forEach(function(num){
    if (num.includes("3")) {
      outputArray.push("I'm sorry Dave,I can't do that right now")
    } else if (num.includes("2")) {
      outputArray.push("Boop!")
    } else if (num.includes("1")) {
      outputArray.push("Beep!")
    }
    else { outputArray.push(num)}
  })
  result = outputArray.join(", ")
  return result


}; //end beepBooper

//beginning to implement user interface logic to display results to index.html
$(document).ready(function(){
  $("form#beepbooper").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    //store the result as a new variable * not needed as of yet
    var output = beepBooper(number);
    //print the populated array
    $(".results").text(output);
    $("form#beepbooper").hide();
    $(".card").show();

  });
});
