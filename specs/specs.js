describe('getNumerals', function() {
  it("is true for a 1000 that is a roman numeral", function() {
    expect(getNumerals(1000)).to.equal("M");
  });

  // it("is true for 2 is II", function() {
  //   expect(getNumerals(2)).to.equal("II");
  //
  // });
  //
  // it("is true for 3 is III", function() {
  //   expect(getNumerals(3)).to.equal("III");
  //
  // });
});
