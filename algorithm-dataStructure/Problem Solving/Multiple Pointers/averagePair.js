function averagePair(arr, avg) {
  let answer = false;
  let p = 0,
    q = 1;

  if (arr.length === 0) {
    return false;
  }
  while (p < arr.length && q < arr.length) {
    let pairAvg = (arr[p] + arr[q]) / 2;
    console.log(arr[p], arr[q], pairAvg);
    if (pairAvg === avg) {
      return (answer = true);
    }
    if (q === arr.length - 1) {
      p++;
      q = p;
    }
    q++;
  }
  return answer;
}

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));
