// sort the data, find sum, multiply the array element by 2, find the average and then median
const newArray = [12, 23, 13, 56, 78, 34, 67, 78, 89, 80];

const sortData = newArray => {
  newArray.sort((a, b) => a - b);
  console.log("this is the sorted data in ascending order" + newArray);
};
sortData(newArray);

// find sum
const findSum = newArray => {
  const sum4 = newArray.reduce((a, b) => a + b);
  console.log(" the sum is" + sum4);
};
findSum(newArray);

// multiply array elements by 2
const multiplyElement = newArray => {
  newArray.sort((a, b) => a - b);
  const multiplied = newArray.map(a => a * 2);
  console.log(`after multipying by two ` + multiplied);
};
multiplyElement(newArray);
// find the average

const findAveragae = newArray => {
  const sum5 = newArray.reduce((a, b) => a + b);
  const av = sum5 / newArray.length;
  console.log(`The average is` + av);
};
findAveragae(newArray);

// find the median
const findMedian = newArray => {
  newArray.sort();
  let lowerMedian = Math.floor((newArray.length - 1) / 2);
  let higherMedian = Math.ceil((newArray.length - 1) / 2);

  const medianMark = (newArray[lowerMedian] + newArray[higherMedian]) / 2;
  console.log(`The median mark is` + medianMark);
};
findMedian(newArray);

//convert an array into a telephone number format

const phoneArray = [2, 5, 6, 7, 7, 7, 9, 8, 6, 9, 7, 9];

const createPhoneNumber = phoneArray => {
  const phone = ("" + phoneArray).replace(/\D+/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  console.log(`Your phone number is ` + phone);
};
createPhoneNumber(phoneArray);
