function funChallenge(input) {
  let a = 10; //  O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n) , n=input
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// BIG O(n)
