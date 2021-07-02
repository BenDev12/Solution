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

// check if  array object name = john

let persons = [{ name: "test1" }, { name: "test2" }];
const checkArrayVal = () => {
  if (persons.some(person => person.name == "test1")) {
    persons.push({ webhook: "url" });
    console.log(persons);
  } else {
    console.log("false");
  }
};
checkArrayVal();

// sort array in descending order
let newp = [1, 7, 6, 9, 2, 8, 3, 5, 0, 4];
const arrangeAarray = newP => {
  newp.sort((a, b) => b - a);
  console.log(newP);
};
arrangeAarray(newp);

// sort array to return even numbers
const inArray = [1, 7, 6, 9, 2, 8, 3, 5, 0, 4];
const evenNumber = inArray => {
  const evens = inArray.filter(items => {
    return items % 2 === 0;
  });
  console.log(evens);
};
evenNumber(inArray);

// some if an item in the array meets a condition, put a new item else proceed,

const itemArray = [1, 3, 4, 5, 8, 5, 34, 56, 91, 33, 43, 55];

const addIntoArr = itemArray => {
  itemArray.some(a => {
    if (a > 90) {
      const newItemy = itemArray.push("hello");
      console.log(newItemy);
    } else {
      const newTem = itemArray.pop(5);
      console.log(newTem);
    }
  });
};
addIntoArr(itemArray);
