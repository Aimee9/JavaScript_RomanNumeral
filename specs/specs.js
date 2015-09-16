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

    it("is true for a 5 that is a roman numeral", function() {
      expect(getBiggestLittle(5)).to.equal("V");
    });

    it("is true for a 1 that is a roman numeral", function() {
      expect(getBiggestLittle(1)).to.equal("I");
    });

    it("is true for a 15 that is a roman numeral", function() {
      expect(getBiggestLittle(15)).to.equal("X");
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

describe('getNumerals', function() {
  it("is true for a 15 that is a roman numeral", function() {
    expect(getNumerals(15)).to.equal("XV");
  });

});
