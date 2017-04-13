var assert = require("chai").assert;
var gob = require("./check");

describe("Luhn", function(){
  it("Should return true if a number is a Luhn number", function() {
    var num = 4024007184137809;
    var result = gob(num);
    assert.isTrue(result);
  })

  it("Should return false if a number is NOT a Luhn number", function() {
    var num = 12345678;
    var result = gob(num);
    assert.isFalse(result);
  })

  it("Should return false if the input is not a number", function() {
    var num = "qwerty";
    var result = gob(num);
    assert.isFalse(result);
  })
})