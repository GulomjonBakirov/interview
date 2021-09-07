const value = (arr1) => {
  const stack = [];
  const stack2 = [];
  arr1.map((val) => {
    for (const i of Object.keys(val)) {
      val[i].map((el) => stack.push(el));
    }
  });
  stack.sort();
  for (const key in stack) {
    nextKey = parseInt(key) + 1;
    if (stack[key] !== stack[nextKey]) {
      stack2.push(stack[key]);
    }
  }
  console.log(stack2);
};

const arr = [
  { test: ["a", "b", "c", "d"] },
  { test: ["a", "b", "c"] },
  { test: ["a", "b", "d"] },
  { test: ["a", "c", "d"] },
  { test: ["a", "b"] },
  { test: ["a", "c"] },
  { test: ["a", "d"] },
  { test: ["a", "b", "k", "e", "e"] },
];

value(arr);
