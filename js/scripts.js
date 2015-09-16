var getNumerals = function(numbers) {
  var romanNumeral = [];
  var numerals;


    while(numbers >= 1000){
      romanNumeral.push("M");
      numbers -= 1000;
    }

    while(numbers >= 500){
      romanNumeral.push("D");
      numbers -= 500;
    }

    while(numbers >= 100){
      romanNumeral.push("C");
      numbers -= 100;
    }

    while(numbers >= 50){
      romanNumeral.push("L");
      numbers -= 50;
    }

    while(numbers === 40){
      romanNumeral.unshift("XL");
      numbers -= 40;
    }

    while(numbers >= 10){
      romanNumeral.push("X");
      numbers -= 10;
    }

    while(numbers === 9){
      romanNumeral.unshift("I");
      numbers -= 9;
    }

    while(numbers >= 5){
      romanNumeral.push("V");
      numbers -= 5;
    }

    while(numbers === 4){
      romanNumeral.push("IV");
      numbers -= 4;
    }

    while(numbers >= 1){
      romanNumeral.push("I");
      numbers -= 1;
    }
   numerals = romanNumeral.join().replace(/[,]/g,"");

  return numerals;
};


$(document).ready(function() {
  $("form#RomanNumerals").submit(function(event) {
    var numbers = parseInt($("input#numbers").val());
    $(".numeral").text(numerals);


     $("#result").show();
    event.preventDefault();
   });
});
