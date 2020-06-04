function isPalindrome(x) {
  if (x < 0) {
    return false;
  } else {
    let ele = "" + x,
      newEle = "";
    for (var i = ele.length - 1; i >= 0; i--) {
      newEle = newEle + ele[i];
    }
    if (ele === newEle) {
      return true;
    }
  }
  return false;
}

console.log(isPalindrome(121));
