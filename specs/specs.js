describe('getBiggestLittle', function() {
  it("is true for a 1000 that is a roman numeral", function() {
    expect(getBiggestLittle(1000)).to.equal("M");
  });

    it("is true for a 500 that is a roman numeral", function() {
      expect(getBiggestLittle(500)).to.equal("D");
    });

    it("is true for a 100 that is a roman numeral", function() {
      expect(getBiggestLittle(100)).to.equal("C");
    });

    it("is true for a 50 that is a roman numeral", function() {
      expect(getBiggestLittle(50)).to.equal("L");
    });

    it("is true for a 10 that is a roman numeral", function() {
      expect(getBiggestLittle(10)).to.equal("X");
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
