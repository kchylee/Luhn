var check = function(num){
  if(isNaN(num)){
    return false;
  }

  var dig = num.toString().split("").reverse();//String array REVERSED

  dig = dig.map(function(str){//Num array without digits
    return parseInt(str);
  });

  var x = dig.shift(); //Check Digit

  for (i = 0; i < dig.length; i += 2){ //Doubling every other digit
    dig[i] *= 2;
    if(dig[i] > 9){
      dig[i] -= 9;
    }
  }

  var sum = dig.reduce(function(a, b){//sums array WITHOUT check digit x
    return a + b;
  }, 0);

  if ((sum + x)%10 === 0){
    return true;
    // console.log("Valid number");
  }else{
    return false;
    // console.log("Invalid number");
  }
}

module.exports = check;