// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;

// const username = "Poly";
// const message = `Username ${username} is ${username.length} characters long`;

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// const age = 16;
// const isAdult = age >= 18;

// const value = "24.5px";
// numerical = Number.parseFloat(value);

// function fibonacci(index) {
//     if (index <= 0) return 0;
//     if (index === 1) return 1;
//     return fibonacci(index - 1) + fibonacci(index - 2);
// }

// console.log(fibonacci(0)); // 0

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }



//?==============================================================================

// const profile = {
//     username: "Jacob",
//   playTime: 300,


// changeUsername(newName) {
//     this.username = newName;
// },
  
// updatePlayTime(hours) {
//     this.playTime += hours;
// },
  
// getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   }
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

//?==============================================================================

// function multiply(x, y, z) {
//   console.log("Result: " + x * y * z);
// }

// // console.log("Log before multiply execution");
// multiply(2, 3, 5); // "Result: 30"
// // console.log("Log after multiply execution");

// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

// let taras = 5;
// taras++;
// console.log(taras);

// const my = ['fargo', 'taras'];
// my[2] = 'Alex';
// console.log(my);
// console.log(my[2]);

// function greeting(username = "Guest") {
//     console.log(`Helo, ${username}!`);
// }
// greeting("Jacob");
// greeting("");