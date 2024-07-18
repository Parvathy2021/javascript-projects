const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("The number is less than 5", function(){
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });
   test("the number is equal to 5", function(){
    let output = checkFive(5);
    expect(output).toEqual("5 is equal to 5.");
 });
    test("The number is greater than 5", function(){
      let output = checkFive(9);
      expect(output).toEqual("9 is greater than 5.");
   });
});