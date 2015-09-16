
describe('getNumerals', function() {
  it("is true for a 15 that is a roman numeral", function() {
    expect(getNumerals(15)).to.equal("XV");
  });

  it("will know how to correctly make a roman numeral with a 9", function() {
    expect(getNumerals(29)).to.equal("IXX");
  });

  it("will know how to correctly make a roman numeral with a 4", function() {
    expect(getNumerals(34)).to.equal("XXXIV");
  });

  it("will know how to correctly make a roman numeral with the number 40", function() {
    expect(getNumerals(40)).to.equal("XL");
  });

  it("will know how to correctly make a roman numeral with the number 80", function() {
    expect(getNumerals(80)).to.equal("LXXX");
  });

  it("will know how to correctly make a roman numeral with the number 99", function() {
    expect(getNumerals(99)).to.equal("XCIX");
  });

  it("will yell at the user for the wrong input", function() {
    expect(getNumerals(4000)).to.equal("You crazy foo.  That's no Roman Numeral, yo.");
  });


});
