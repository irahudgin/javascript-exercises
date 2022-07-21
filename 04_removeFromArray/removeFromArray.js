const removeFromArray = function (arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    let itemToBeRemoved = (element) => element == args[i];
    let ind = arr.findIndex(itemToBeRemoved);
    if (ind == -1) {
      return arr;
    }

    arr.splice(ind, 1);
  }
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
