const twoSum = (arr, target) => {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};
console.log(twoSum([2, 7, 11, 15], 9));
