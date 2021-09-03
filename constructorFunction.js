function book(name) {
  return name;
}

function Book(name) {
  this.name = name;
}

const book1 = book("aziz");
const book2 = new Book("saman");
// console.log(book1.constructor);
// console.log(book2.constructor);

//primitive da x ni y ga copy qilsak y ni ozgartirsak ham x ozgarmaydi
//reference da esa x ni xotiradagi orni copy qilib olib kelinadi

let x = { x: 2000 };
let y = x; // xotiradagi manzili saqlanadi

y.x = 30;
console.log(x, y);

//Klonlash

const person = { name: "G'ulomjon", isActive: true };
const person2 = {};
for (key of Object.keys(person)) {
  person2[key] = person[key];
}
const person3 = Object.assign({}, person);
const person4 = { ...person };
person4.name = "Abbosxon";
// console.log(person2, person3, person4);

const users = [];
for (let i = 0; i < 100; i++) {
  users.push({
    username: `user${i}`,
    password: `user${i}`,
  });
}

users.splice(0, 5);
const oldUser = users.slice(0, 5);

const findUser = users.find((user) => {
  return user.username === "user14" || user.password === "user3";
});

const findUser2 = users.filter((user) => {
  return user.username === "user14" || user.password === "user3";
});

const findUser3 = users.findIndex((user) => {
  return user.username === "user14" || user.password === "user3";
});
console.log(findUser3);

for (let i = 0; i < Object.keys(person).length; i++) {}
