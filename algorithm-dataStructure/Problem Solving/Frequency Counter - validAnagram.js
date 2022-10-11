function validAnagram(a, b) {
  // add whatever parameters you deem necessary - good luck!
  const obj1 = {};
  const obj2 = {};

  for (let i of a) {
    obj1[i.toLowerCase()] = (obj1[i.toLowerCase()] || 0) + 1;
  }
  for (let i of b) {
    obj2[i.toLowerCase()] = (obj2[i.toLowerCase()] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
