function countUniqueValues(array) {
  let p = 0;
  let q = 1;

  if (array.length === 0) {
    return 0;
  }
  while (p < array.length && q < array.length) {
    if (array[p] === array[q]) {
      q++;
    } else {
      p++;
      array[p] = array[q];
    }
  }
  return p + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
