let a=[2,4,67]
let b=[ 3,3,60]

function compareTriplets(a, b) {
    let final =[]
    let asccore=0;
    let bsccore =0;
    
    for(let i=0; i<=a.length; i++){
        for(let i=0;i<= b.length; i++){
            if(a[i]>b[i]){
                console.log(asccore)
                asccore += 1;
            } else if(a[i]< b[i]){
                console.log(bsccore)
                bsccore +=1;
            } 
        }
        final= [asccore,bsccore]
        console.log(final)
        return final
    }

}
compareTriplets(a,b)

const arr=[[11,2,4],[4,5,6], [10,8,-12]]

function squareMatrix(arr){
    console.table(arr)
    let diag1=0;
    let diag2 =0;
    let n = arr.length
 for (let i = 0; i < n; i++) {
   diag1 += arr[i][i];
  //  console.log(diag1)
   diag2 += arr[i][arr[i].length - (i + 1)];
   console.log(diag2)
}
let diff = Math.abs(diag1 - diag2);
console.log(diff)
return diff;
   

   
}

squareMatrix(arr)

let arry=[1,2,3,4,6,5,7,9,8]

function compareArry(arry){
    var n= arry.length
    // console.log(n)
    for(let i=0; i<arry.length; i++){
       if(3===arry[i]){  
        console.log(i)
       }
    }}
    compareArry(arry)

    // string where even index Uppercase, odd index lowercase

    // const wierd ='string'
    // function toWierd (wierd){
    //    let nesplit = wierd.slice(0,6)
    //    for(let i=0; i< nesplit.length; i++){
    //        let result = nesplit[i,2].toUpperCase()
    //    let  final = wierd.replace(result)

    //    console.log(final)
    //    }



    // }
    // toWierd(wierd)

    // sale by marchant
// const unArr =[1,2,1,2,1,3,2]
// const n = 7
// const sockMerchant=(n,unArr)=>{
// let pair=0
// let sorted = unArr.sort()
    
//     for(let i=0; i<n-1; i++){
//         if(sorted[i]===sorted[i+1]){
//             pair++;
//             i+=1
//         }
       
//     }
//     console.log(pair)
// return pair
// }
// sockMerchant(unArr)

// sort numbers
const unSorted= [2,3,5,1,3,6,4,8,7,2,2,3,3,4,6,5,1]
function sortNumz(unSorted){
    let pair =0
    sorted= unSorted.sort((a,b)=>a-b)
    console.log(sorted)
    for(let i=0; i<sorted.length-1; i++){
        if(sorted[i]===sorted[i+1]){
            pair++
            i+= 1
        }
    }
    console.log(pair)
}
sortNumz(unSorted)

// conuting valley path

const path=["DDUUUUDD"]

const valleyCount=(path)=>{
    let valley=0
     let currentLevel=0; 
     let prevLevel= 0;
      
      for(let i=0; i<path.length; i++){
          prevLevel =currentLevel
          
          if(path[i]==='U'){
              currentLevel+=1
          }else{
              currentLevel -=1
          }
          if(prevLevel===0 && currentLevel<0){
              valley ++
          }
      }
    console.log(` These ${valley}`)
}
valleyCount(path)

// array splitting function

// Jumpp the clouds function

const c = [0,1,0,0,0,1,0]

function jumpCloud(c){
    let Jumps =0
    for(let i=0; i<c.length-1; i++){
        
        if(c[i]===0){
            if(c[i]===c[i+1]){
            Jumps+=1
            i++
            }
        }else{
            Jumps++
        }
       
    }
 console.log(`These are the number ${Jumps}`)
}

jumpCloud(c)

// repeated letters

// const s=["abcacabcac"]
// function repeatedString(s, n) {
//     const numberOfA = str => str.split('').filter(char => char === 'a').length
//     return (
//       numberOfA(s) * Math.floor(n / s.length) +
//       numberOfA(s.substring(0, n % s.length))
//     )
//   }

//   hour glass
// function hourglass(arr){

//    let  maxX = 3; 
//    let  maxY = 3; 
//     let total = -64;  
   
//     for (let y = 0; y <= maxY; y++) {
//         for (let x = 0; x <= maxX; x++) {
        
//             let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            
         
//             sum += arr[y+1][x+1];
            
           
//             sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            
         
//             if (total < sum)
//                  total = sum;
//         }
//     }
    
//     return total;
// }
// solution 2

// function hourglassSum(arr) {
//     let max = -63;

//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 4; j++) {
//             let sum = arr[i + 1][j + 1];
//             for (let k = 0; k < 3; k++) {
//                 sum += arr[i][j + k];
//                 sum += arr[i + 2][j + k]
//             }
//             if (sum > max) max = sum;
//         }
//     }

//     return max;
// }
let buz=[1,2,3,4,5]
function moveArr(buz){
    let d =4
    while(d){
        buz.push(buz.shift())
        d--
    }
    console.log(buz)
    return buz
    // for(let i=0; i<d; i++){
    //     let elem = buz.shift()
    //     buz.push(elem)
    //     }
    
    // console.log(buz.join(' '))
}

moveArr(buz)

// budget
const k=[40,50,45,30,45]
const m=[12,8,20,10,15]


function budget(k,m){
    let cost= 60
    let actual=[]
    let low=0;
    let max =0
for(let i=0; i<k.length; i++){
        actual.push(k[i]+ m[i])
        console.log(actual)
        // let newList= actual.sort()
        // console.log(newList)
    // for(x=0; x<newList.length; x++){
    //     if(){
          
    //     }
    // }
}

// console.log(max)
}
budget(k,m)

// new yeasr chaos
function minimumBribes(q) {
    var Too_Chaotic ='Too chaotic'
    var bribes=0;
    
    for(let i=0; i<q.length; i++){
        var orginal_pos =q[i]-1;
        var diff = orginal_pos-i;
        
        if(diff > 2){
            return console.log(Too_Chaotic)
        }else{
            if(diff <=0){
                for( let x= Math.max(0,orginal_pos-1); x<i; x++){
                    let start_pos = q[x]-1;
                    
                    if(start_pos > orginal_pos){
                        bribes++
                    }
                }
            }
        }
    }
    return console.log(bribes)
}

// minimum swap

var p=[7,1,3,2,4,5,6]

function minimumSwaps(arr) {
    let swap = 0;
    let visited =[]
  for (let i = 0; i < arr.length; i++) {
      let j = i, cycle = 0;
      while (!visited[j]) {
          visited[j] = true;
          j = arr[j] - 1;
          cycle++;
      }
      if (cycle != 0){
          swap += cycle - 1;
      }
         
  }
  return swap;

}

// 
function arrayManipulationOptimzied(n, queries) {

    const arr = Array(n + 1);
    let maxValue = 0,
    currentNumber = 0;
    queries.forEach(([startRange, endRange, value]) => {
         arr[startRange] = arr[startRange] || { start: 0, end: 0 };
         arr[endRange] = arr[endRange] || { start: 0, end: 0 };
         arr[startRange].start += value;
         arr[endRange].end += value;
     });
    arr.forEach((cell) => {
       if (cell) {
         currentNumber += cell.start;
         if (currentNumber > maxValue) {
            maxValue = currentNumber;
         }
         currentNumber -= cell.end;
     }
   });
 return maxValue;
  
}

// soln 2

// arr = [0]*n
//     for i in queries:
//         arr[i[0] - 1] += i[2]
//         if i[1] != len(arr):
//             arr[i[1]] -= i[2]
//     maxval = 0
//     itt = 0
//     print(arr)
//     for q in arr:
//         itt += q
//         if itt > maxval:
//             maxval = itt
//     return maxval

// ransom note

function checkMagazine(magazine, note) {
    
    }
    // soln 2

//    closest number

const numbers= [6,2,4,10]
function closest(numbers){
    var minDiff, diffPairs = {};
    numbers .map((number)=> { return parseInt(number, 10); }) 
     .sort((a, b)=> { return a - b; }) 
     .forEach((number, i, arr)=> {
         var nextNumber = arr[i + 1];
         if (!nextNumber) return;
         var diff = Math.abs(number - nextNumber);
 
         if (typeof minDiff === 'undefined' || diff < minDiff) minDiff = diff;
         if (typeof diffPairs[diff] === 'undefined') diffPairs[diff] = [];
 
         diffPairs[diff].push([number, nextNumber]);
     });
 
     console.log(diffPairs[minDiff].reduce((prev, curr)=> {
         return prev.concat(curr);
     }).join(' '));
 

}

closest(numbers)

// solution greedy approach
const input=[6,2,4,10]
function gredyA(){
    // const numbers = input.split("\n")[1].split(" ").map(Number)
//sort through input
 input.sort( (a,b) => a - b) 
 let min,
 last = input[0],
 diff = 0,
 results = [];
 
for (let i = 1; i < input.length; i++) {
    diff = Math.abs(last - input[i])

    if (diff < min) results = []
 
    min = Math.min(min, diff) || diff 

    if (diff === min) results.push(last, input[i])

    last = input[i]
}

console.log(results.join(" "))
}

gredyA(input)


let sortedArr = arr.sort((a,b) => a-b)  //-5 1 0 3 custom input
//console.log(sortedArr) //    [ -5, 0, 1, 3] sorted
for(let i=0; i<sortedArr.length; i++){
  for(let j=0; j<sortedArr.length; j++){
    if(i!==j && sortedArr[j]>sortedArr[i]){
      let temp = sortedArr[j]-sortedArr[i]
      if(temp < minDifferenceSofar){
          minDifferenceSofar = temp
          minDifferencePairs =[ [sortedArr[i]], [sortedArr[j]] ]
      }
      else if(temp === minDifferenceSofar){
        minDifferencePairs.push(sortedArr[i],sortedArr[j])
      }
    }
  }
}

//console.log(minDifferencePairs)  //nestedArray [[i,j]]
let flattenedArr = minDifferencePairs.reduce((acc,elem) => acc.concat(elem), []);
//console.log(flatArr) [i,j]
return flattenedArr


// let startValue = 0; //Integer.MIN_VALUE
//     for (let x = startValue; x <= Integer.MAX_VALUE; x++) {
//         let sum = x;
//         for (int n : nums) {
//             sum += n;
//             if (sum < 1) {
//                 break;
//             }
//         }
//         if (sum >= 1) {
//             return x;
//         }
//     }
//     return 0;
    