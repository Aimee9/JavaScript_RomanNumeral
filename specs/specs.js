describe('getNumerals', function() {
  it("is true for a single digit that is a roman numeral", function() {
    expect(getNumerals(1)).to.equal("I");
  });

  it("is true for 2 is II", function() {
    expect(getNumerals(2)).to.equal("II");
  });
});
