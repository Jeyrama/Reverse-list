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