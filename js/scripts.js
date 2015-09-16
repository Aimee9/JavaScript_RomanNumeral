var getNumerals = function(numbers) {

  var romanNumeral;
  romanNumeral = "I";
  return romanNumeral;


};


$(document).ready(function() {
  $("form#RomanNumerals").submit(function(event) {
    var numbers = parseInt($("input#numbers").val());
  //  numbers = getnumerals(numbers);

    $(".numbers").text(numbers);


     $("#result").show();
    event.preventDefault();
   });
});
