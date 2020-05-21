findMissing = (array1, array2) => {
  return array1.filter((e) => !array2.includes(e));
};

var result = findMissing([4, 12, 9, 5, 6, 1], [4, 9, 12, 6]);
console.log(result);

/*

Write a function called findMissing that takes two arrays and returns the missing elements from the second array
var result = findMissing([4,12,9,5,6,1], [4,9,12,6])
// result = [5,1]

*/
