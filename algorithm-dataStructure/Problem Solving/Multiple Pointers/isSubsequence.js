function isSubsequence(first, second) {
  let p = 0,
    q = 0;
  let answer = true;
  while (p < first.length && q < second.length) {
    if (first[p] === second[q]) {
      p++;
      q = p - 1;
      answer = true;
    } else {
      answer = false;
    }
    q++;
  }
  return answer;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
