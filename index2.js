// 1. You are given number N and you need to write a function which returns an array length of N that contains random numbers between -100, 100.
//2. Change the the function that you wrote to return an array length of N. All of the array elements within the array repeated twice except one element.

const randomNumber = (N) => {
  let stack = [];
  let map = new Map();
  for (let i = 0; i < N / 2; i++) {
    let a = parseInt(Math.random() * 200) - 100;
    if (map[a] === true) {
      i--;
      continue;
    }
    stack.push(a);
    stack.push(a);

    map[a] = true;
  }
  let a = parseInt(Math.random() * 200) - 100;
  stack.push(a);
  return stack;
};

console.log(randomNumber(19));
