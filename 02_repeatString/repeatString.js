const repeatString = function (str, num) {
  let strRepeat = str;
  if (num == 1) {
    return str;
  } else if (num > 1) {
    for (let i = 0; i < num - 1; i++) {
      str += strRepeat;
      console.log(str);
    }
    return str;
  } else if (num == 0) {
    return "";
  } else {
    return "ERROR";
  }
};

// repeatString("hey", 1);

// Do not edit below this line
module.exports = repeatString;
