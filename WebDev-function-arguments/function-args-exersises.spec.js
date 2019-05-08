describe("returnArg", function() {
  it("returns the passed in argument", function() {
    expect(returnArg("hello")).to.equal("hello");
  });
});
describe("addArgPlusThree", function() {
  it("takes in an argument and returns it's value plus 3", function() {
    expect(addArgPlusThree(4)).to.equal(7);
  });
});
describe("addTwoArgs", function(){
   it("takes in two arguments adds them together and returns that value", function(){
      expect(addTwoArgs(3, 3)).to.equal(6);
   })
});
describe("addArgAndVar", function(){
   it("takes in an argument and returns the value of the argument plus value", function(){
      expect(addArgAndVar(10)).to.equal(13);
   })
});
