var getNumerals = function(numbers) {
  //  var biggestLittle; //holds the largest qualifying Roman numeral which is <= (numbers)
  var romanNumeral = [];
  var numerals;
  while (numbers > 0) {

    if(numbers >= 1000){
      romanNumeral.push("M");
      numbers -= 1000;
    }

    if(numbers >= 500){
      romanNumeral.push("D");
      numbers -= 500;
    }

    if(numbers >= 100){
      romanNumeral.push("C");
      numbers -= 100;
    }

    if(numbers >= 50){
      romanNumeral.push("L");
      numbers -= 50;
    }

    if(numbers >= 10){
      romanNumeral.push("X");
      numbers -= 10;
    }

    if(numbers >= 5){
      romanNumeral.push("V");
      numbers -= 5;
    }
    if(numbers >= 1){
      romanNumeral.push("I");
      numbers -= 1;
    }
  }
   numerals = romanNumeral.join().replace(/[,]/g,"");

  return numerals;
};

// //returns largest roman numeral <= numbers
//  var getBiggestLittle = function(numbers) {
//    var character;
//
//   if(numbers >= 1000){
//     numbers = numbers - 1000;
//      character = "M";
//     }
//
//    else if(numbers >= 500){
//      numbers = numbers - 500;
//         character = "D";
//     }
//
//    else if(numbers >= 100){
//      numbers = numbers - 100;
//          character = "C";
//     }
//
//    else if(numbers >= 50){
//      numbers = numbers - 50;
//           character = "L";
//     }
//
//    else if(numbers >= 10){
//      numbers = numbers - 10;
//            character = "X";
//     }
//
//    else if(numbers >= 5){
//      numbers = numbers - 5;
//             character = "V";
//     }
//
//    else if(numbers >= 1){
//      numbers = numbers - 1;
//              character = "I";
//     }
//
//
//   return character;
//  };

$(document).ready(function() {
  $("form#RomanNumerals").submit(function(event) {
    var numbers = parseInt($("input#numbers").val());
    $(".numeral").text(numerals);


     $("#result").show();
    event.preventDefault();
   });
});
