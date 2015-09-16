var getNumerals = function(numbers) {
  var biggestLittle; //holds the largest qualifying Roman numeral which is <= (numbers)
  var romanNumeral = new Array(); //will hold the roman numeral

   while (numbers > 0){
     biggestLittle = getBiggestLittle(numbers);
     romanNumeral.push(biggestLittle);
     if(biggestLittle === "M"){
       numbers = numbers - 1000;
       }
       else if(biggestLittle === "D"){
          numbers = numbers - 500;
          }
        else if(biggestLittle === "C"){
           numbers = numbers - 100;
         }
         else if(biggestLittle === "L"){
            numbers = numbers - 50;
          }
         else if(biggestLittle === "X"){
            numbers = numbers - 10;
          }
         else if(biggestLittle === "V"){
             numbers = numbers - 5;
           }
         else if(biggestLittle === "I"){
            numbers = numbers - 1;
            }

          }
          var numbers = romanNumeral.join();
             numbers = numbers.replace(/[,]/g,"");

          return numbers;



 };

//returns largest roman numeral <= numbers
 var getBiggestLittle = function(numbers) {
   var character;

  if(numbers >= 1000){
     character = "M";
    }

   else if(numbers >= 500){
        character = "D";
    }

   else if(numbers >= 100){
         character = "C";
    }

   else if(numbers >= 50){
          character = "L";
    }

   else if(numbers >= 10){
           character = "X";
    }

   else if(numbers >= 5){
            character = "V";
    }

   else if(numbers >= 1){
             character = "I";
    }


  return character;
 };

$(document).ready(function() {
  $("form#RomanNumerals").submit(function(event) {
    var numbers = parseInt($("input#numbers").val());
    $(".numeral").text(numerals);


     $("#result").show();
    event.preventDefault();
   });
});
