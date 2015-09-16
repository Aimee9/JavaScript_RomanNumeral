var getNumerals = function(numbers) {
  var biggestLittle; //holds the largest qualifying Roman numeral which is <= (number)
  var romanNumeral = new Array(); //will hold the roman numeral

    // for(var i = 0; i < numbers; i++) {
    //    if (number <= 3999;){
    //
    //    }
    //
    // }

 };

//returns largest roman numeral <= number
 var getBiggestLittle = function(number) {
   var character;
   if(number >= 1000){
     character = "M";
   }
  else if(number >= 500){
      character = "D";
   }
   else if(number >= 100){
       character = "C";
    }

    else if(number >= 50){
        character = "L";
     }

     else if(number >= 10){
         character = "X";
      }

      else if(number >= 5){
          character = "V";
       }

       else if(number >= 1){
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
