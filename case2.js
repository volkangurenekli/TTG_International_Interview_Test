rotate = (array, number) => {
  for (let i = 1; i <= number; i++) {
    array.shift(array.push(array[0]));
  }
  return array;
};

result = rotate([1, 2, 3, 4, 5, 6], 1);
console.log(result);

/*

Write a function called rotate that takes an array A and a number B and returns the left rotated array A by B positions.
result = rotate([1, 2, 3, 4, 5, 6], 1);
// result = [2, 3, 4, 5, 6, 1]

*/
