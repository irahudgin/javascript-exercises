const reverseString = function (str) {
  let strForwards = str;
  let strBackwards = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strBackwards += strForwards.charAt(i);
    // console.log(strBackwards);
  }
  return strBackwards;
};

reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
