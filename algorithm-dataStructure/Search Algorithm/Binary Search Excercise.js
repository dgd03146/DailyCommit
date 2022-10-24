function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor(start + end / 2);

  while (array[mid] !== value && start <= end) {
    if (value < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    mid = Math.floor((start + end) / 2);
    console.log('start:', start, 'end:', end, 'mid', mid);
  }

  if (array[mid] === value) {
    return mid;
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(binarySearch([1, 2, 3, 4, 5], 3));
// console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));

// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99
//     ],
//     10
//   )
// );
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99
//     ],
//     95
//   )
// );
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99
//     ],
//     100
//   )
// );
