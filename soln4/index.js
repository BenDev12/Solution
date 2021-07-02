let num = 9119;
const sequareDigit = (num) => {
  // let the code be with you
  const number = parseInt(
    ("" + num)
      .split("")
      .map((a) => a * a)
      .join("")
  );
  console.log(number);
};
sequareDigit(num);

let digits = 12;

const squareNumber = (digits) => {
  const newdig = parseInt(("" + digits).split("").join(""));
  console.log(newdig);
};
squareNumber(digits);

// sort array
const array = [1, 35, 60, 9, 8, 7, 12, 70, 90, 2, 3, 94, 86, 10];
const sortArray = (array) => {
  const sorted = array.sort((a, b) => a - b);
  console.log(sorted);
};
sortArray(array);

// sum array  of figure
const figures = [1, 2, 3, 4, 5, 6];
const totalFunction = (figures) => {
  const ava = figures.reduce((a, b) => a + b) / figures.length;
  console.log(ava);
};
totalFunction(figures);

// sort array of strings

const names = ["ben", "onyango", "philo", "jovita", "james"];

const sortNames = (names) => {
  newNames = names.sort();
  console.log(newNames);
};
sortNames(names);

// square a number

const sqNum = 4;

const squar = (sqNum) => {
  const result = sqNum * sqNum;
  console.log(result);
};
squar(sqNum);

// largest number in array

const arrNumberz = [1, 2, 10, -9, 20, 100, 101];

const maxNumber = (arrNumberz) => {
  const largets = Math.max(...arrNumberz);
  console.log(`The largets number is ${largets}`);
};
maxNumber(arrNumberz);

// flatten arrays in a single array

const majorArray = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];

const flattenArray = (majorArray) => {
  merged = [].concat(...majorArray);
  console.log(merged);
};
flattenArray(majorArray);

// given a string, replace every letter with its position in the alphabet e.g a is 1.

const text = "The sunset sets at twelve o' clock.";

const alphabetPosition = (text) => {
  // may the code be with you

  const newText = text
    .split("")
    .map((a) => parseInt(a, 36) - 9)
    .filter((a) => a >= +1)
    .join(" ");
  console.log(newText);
};
alphabetPosition(text);

//   spacing a string

const letters = "Hey mr onyango benard";
const spacing = (letters) => {
  let betweenChar = " ";
  const results = letters.split("").join(betweenChar);
  console.log(results);
};

spacing(letters);

// validate a pin code

let pin = "01195";

const validatePin = (pin) => {
  const checkLength = pin.length === 4 || pin.length === 6;
  const isNum = pin.match(/^(\d{4}|\d{6})$/);
  if (checkLength && isNum) {
    console.log(pin.length);
    console.log(true);
    console.log(`This pin number ${pin} is valid`);
  } else {
    console.log(pin.length);
    console.log(false);
    console.log(`This pin number ${pin} is inValid`);
  }
};
validatePin(pin);
// check if number is divisible by 3 and 5 return fizzBuzz, buzz and fizz

const x = 15;

const divisbleNum = (x) => {
  for (let x = 1; x <= 15; x++) {
    if (x % 5 == 0 && x % 3 == 0) {
      console.log("FizzBuzz");
    } else {
      if (x % 5 == 0) {
        console.log("Buzz");
      } else {
        if (x % 3 == 0) {
          console.log("Fizz");
        } else {
          console.log(x);
        }
      }
    }
  }
};
divisbleNum(x);

// validate phone number

const tel = "xx0701619497";

const validateNumber = (tel) => {
  numLength = tel.length === 10 || tel.length === 11 || tel.length === 12;
  checkInteger = tel.match(/^(\d){10}|(\d){11}|(\d){12}$/);

  if (numLength && checkInteger) {
    console.log(`This ${tel} is a valid number`);
  } else {
    if (!numLength) {
      console.log(`Telephone number must contain 10-12 digits`);
    } else {
      if (!checkInteger) {
        console.log(`Number ${tel} contains invalid character(s)`);
      }
    }
  }
};

validateNumber(tel);

// validate a credit card number

const ccnumber = "1234567891234567";
const validateCcnumber = (ccnumber) => {
  checlCard = ccnumber.length === 16;
  checknum = ccnumber.match(/^(\d){16}$/);

  if (!checlCard) {
    console.log("Credit card number must have 16 digits");
  } else {
    if (!checknum) {
      console.log("Credit card must contain only digits");
    } else {
      let last4 = ccnumber.slice(0, 6);
      let char = "*";
      let repeatecChar = char.repeat(ccnumber.length - 6);
      let first = last4.replace(last4, repeatecChar);
      let hidden = first.concat(ccnumber.slice(ccnumber.length - 6));
      console.log(`Please varify your card number ${hidden}`);
    }
  }
};
validateCcnumber(ccnumber);

// sort array of strings
const alpy = ["onyango", "benard", "david", "ali", "moses", "jose"];

const sortray = (alpy) => {
  newa = alpy.sort();
  console.log(newa);
};

sortray(alpy);

// debit challenge
const n = 5;
const debts = [
  ["alex", "blake", 5],
  ["blake", "alex", 3],
  ["Casey", "Alex", 7],
  ["Casey", "Alex", 4],
  ["Casey", "Alex", 2],
];

const smallestNegative = (debts) => {
  let borrow = debts[(0, 3, 4)];
  console.table(debts);
  console.log(debts[0][0]);
  console.log(borrow);
};
smallestNegative(debts);
// divisible
// const s = 'lrbblrbb';
// const t= 'lrbb';

// const dive =(t,s)=>{
//     const news = s.split('').map(a => parseInt(a, 36) -9).filter(a => a >= +1).join(' ')
//     const new2 = t.split('').map(a => parseInt(a, 36) -9).filter(a => a >= +1).join(' ')
//   const  tt= parseInt(news.split('').reduce((a,b)=>a+b))

//   console.log(tt)
//    console.log(news)
//    console.log(new2)

// }
// dive(t,s)

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const keysCount = parseInt(readLine().trim(), 10);

//     let keys = [];

//     for (let i = 0; i < keysCount; i++) {
//         const keysItem = readLine();
//         keys.push(keysItem);
//     }

//     const message = readLine();

//     const result = countMessages(keys, message);

//     ws.write(result + '\n');

//     ws.end();
// }

// pairing socks with colors

const sock = 7;
const color = [1, 2, 1, 2, 1, 3, 1, 3, 2];

function sockMerchant(sock, color) {
  //Need to initiate a count variable to count pairs and return the value
  let count = 0;
  //sort the given array
  color = color.sort();
  console.log(color);
  //loop through the sorted array
  for (let i = 0; i < n - 1; i++) {
    //if the current item equals to the next item
    if (color[i] === color[i + 1]) {
      //then that's a pair, increment our count variable
      count++;
      //also increment i to skip the next item
      i += 1;
    }
  }
  console.log(count);
  //return the count value
  return count;
}
sockMerchant(sock, color);

// Rating

var rating = [2, 3, 4, 2, 3, 4, 5];
var newRate = rating.push(5);
function productRating(newRate) {
  console.log(newRate);
  console.log(newRate.length);
  avRate = newRate.reduce((a, b) => a + b) / newRate.length;
  // var rouded = Math.round(avRate)
  console.log(avRate);
  console.log(Math.round(avRate));
}
productRating(rating);

// plus minus challenge

const aggs = [-4, 3, -9, 0, 4, 1];

const plusMinu = (aggs) => {
  let positive = 0,
    negative = 0,
    zero = 0;
  let n = aggs.length;
  console.log(n);
  // now lets travers the array
  if (n > 0 && n <= 100) {
    aggs.map((Element, key) => {
      if (Element > 0) {
        positive++;
      } else {
        if (Element < 0) {
          negative++;
        } else {
          zero++;
        }
      }
    });
    var resulte = console.log(
      positive / n + "\n" + negative / n + "\n" + zero / n
    );
  }
};
plusMinu(aggs);

//staircase challenge

const ni = 6;

const stairCase = (ni) => {
  for (let i = 0; i < ni; i++) {
    let step = " ";
    for (let j = 0; j < ni; j++) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

stairCase(ni);

// solution 2

var nn = 6;
const staircase2 = (nn) => {
  for (let i = 1; i <= nn; i++) {
    let step = console.log(" ".repeat(nn - i) + "#".repeat(i));
  }
};
staircase2(nn);

// ransom note
const magazine = "ive got a lovely bunch of coconuts";
const note = "ive got some coconuts";

function checkMagazine(magazine, note) {
  let result = "Yes";
  for (let i = 0; i < note.length; i++) {
    const index = magazine.indexOf(note[i]);
    if (index === -1) {
      result = "No";
      break;
    } else {
      magazine.splice(index, 1);
    }
  }
  return console.log(result);
}

// compare two strings
const s1 = "hello world";
const s2 = "hi world";

function twoStrings(s1, s2) {
  // result ='Yes'
  const s1len = s1.length;
  const s2len = s2.length;

  if (s1len >= 1 && s1 <= 1000 && s2len >= 1 && s2len <= 1000) {
    result =
      s1.split("").filter((el, key) => s2.indexOf(el) > -1).length > 0
        ? "Yes"
        : "No";
  }
}

twoStrings(s1, s2);

// update recode

var newStatus = "complete";

function createRecod(newStatus) {
  var prod = {
    title: "product",
    status: "ongoing",
  };
  console.log(prod);
  var newStatus = "complete";
  if (newStatus === "complete") {
  }
  console.log(prod);
}

createRecod(newStatus);
