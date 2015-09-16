var getNumerals = function(numbers) {
  var biggestLittle; //holds the largest qualifying Roman numeral which is <= (number)
  var romanNumeral = new Array(); //will hold the roman numeral

   while (numbers > 0){
     biggestLittle = getBiggestLitte(number);
     romanNumeral.push(biggestLittle);
     if(biggestLittle = "M"){
       number = number - 1000;
       }
       else if(biggestLittle = "D")
          number = number - 500;
          }
        else if(biggestLittle = "C")
           number = number - 100;
         }
         else if(biggestLittle = "L")
            number = number - 50;
          }
         else if(biggestLittle = "X")
            number = number - 10;
          }
         else if(biggestLittle = "V")
             number = number - 5;
           }
         else if(biggestLittle = "I")
            number = number - 1;
            }

          }

          return romanNumeral;



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
