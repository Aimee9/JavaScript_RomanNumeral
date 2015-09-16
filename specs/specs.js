describe('getNumerals', function() {
  it("is true for a single digit that is a roman numeral", function() {
    expect(romanNumeral(1)).to.equal("I");
  });
});
