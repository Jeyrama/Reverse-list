/*
Write reverseList function that simply reverses lists.
*/


// Solution

function reverseList(arr) {
  let res = [];
  for(let i of arr) {
    res.unshift(i);
  }
  return res;
}

// or

function reverseList(arr) {
  let result = [];
    for(let i = 0; i < arr.length; i++){
    result.push(arr[arr.length - 1 - i]);
    }
    return result;
}