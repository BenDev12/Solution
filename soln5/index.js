const args = [1, 3, 6, 8, 11, 4];

function highest() {
  var args = [1, 3, 6, 8, 11, 4];
  var first = args[0];
  var second = 0;
  var third = 0;
  for (let i = 0; i <= args.length; i++) {
    if (args[i] > first) {
      third = second;
      second = first;
      first = args[i];
      console.log(first);
    } else if (args[i] > second) {
      third = second;
      second = args[i];
      console.log(second);
    } else {
      if (args[i] > third) {
        third = args[i];
        console.log(third);
      }
    }
  }
}
highest(args);

const a = [1, 2, 5, 8, 11, 4,7,7,5];

function isPossible(a){
  const notPossible= false
  const possible =true
  for(let i =0; i<a.length; i++){
    if(i%2==0 && a[i]%2==0){
      console.log(notPossible)
      return notPossible;
    }
    if(i%2==1 && a[i]%2==1){
      console.log(notPossible)
      return notPossible;
    }
  }
  console.log(possible)
  return possible;
}

isPossible(a)

// new changes