describe('returnTwoPlusThree',function(){
   it('return the string "2 + 3" ', function(){
      expect(returnTwoPlusThree()).to.equal('2 + 3');
      expect(typeof returnTwoPlusThree()).to.equal('string');
   })
})