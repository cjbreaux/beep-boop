
//var result = "";
//this will create a for loop to produce an array doing the same thing as the previous code but for any number.
var array = [];
var resultArray = [];
var resultString = "";

function counter (number) {
  for(i=0; i<=number; i+=1) {
  array.push(number - i);
  }
  array = array.reverse();
  resultString = array.join();
  array = resultString.split();
  console.log(array);
  return array;
}

function beepBooper(number) {
  var outputString = counter(number);
  //console.log("Inside beepBooper" + outputString);

  for (i=0; i<outputString.length; i+=1) {
    console.log(outputString[i]);
    if (outputString[i].includes("1")) {
      //alert("has a 1");
    }
  }
 console.log(outputString);
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
    $("#results").text(resultString);
  });
});
