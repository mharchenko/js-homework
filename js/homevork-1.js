//  * Напиши скрипт для обчислення площі прямокутника зі сторонами,
//  * значення яких зберігаються у змінній values у вигляді рядка.
//  * Значення гарантовано розділені пробілом.

// const values = '50 150';

// const arSumm = values.split(' ');
// --------------------------Площа------------------------------------------
// const area = Number(arSumm[0]) * Number(arSumm[1]);

// --------------------------Периметр------------------------------------------
// const area = (Number(arSumm[0]) + Number(arSumm[1])) * 2;

// console.log(area);
// --------------------------------------------------------------------------------------

// Напиши скрипт для перебору масиву fruits.
//  * Для кожного елемента масиву виведи в консоль рядок
//  * у форматі номер_елемента: значення_елемента.
//  * Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// const fruits = ['Apple', 'Grappe', 'Apricot', 'Banana', 'Limon'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}:${fruits[i]}`);
// }
// --------------------------------------------------------------------------------------
// * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14, 21, 45, 50, 73, 88];
// let total = 0;

// for (const num of numbers) {
//   if (!(num % 2)) {
//     total += num;
//   }
// }

// console.log(total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14, 21, 45, 50, 73, 88];
// const arr = [];
// for (const num of numbers) {
//   if (num % 2) {
//     continue;
//   }
//   arr.push(num);
// }
// console.log(arr);
// --------------------------Обрахунок суми з масиву-------------------------
// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     total += arr[i];
//   }
// }

// console.log(total);
// --------------------------------------------------------------------------------------------
//  Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
//  * У змінних names та phones зберігаються рядки імен та телефонних номерів,
//  * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
//  * відповідність. Кількість імен та телефонів гарантовано однакова.
//  */

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '38001234567,38001112233,380055566377,380055566300';

// const ArreyNames = names.split(',');
// const ArreyPhones = phones.split(',');

// for (let i = 0; i < ArreyNames.length; i++) {
//   console.log(`${ArreyNames[i]} - ${ArreyPhones[i]}`);
// }
// ------------------------------------------------------------------------------------------------
//  * Напиши скрипт, який виводить у консоль усі слова рядка
//  * крім першого і останнього. Результуючий рядок не повинен починатися
//  * або закінчуватися символ пробілу.
//  * Скрипт повинен працювати для будь - якого рядка.

// const string = '   Welcome  to  the  future   ';

// const Arrey = string.trim().split(' ');
// console.log(Arrey);
// const result = Arrey.slice(1, Arrey.length - 1)
//   .join(' ')
//   .trim();
// console.log(result);
// ------------------------------------------------------------------------------------------------
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
//  * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const values = [26, 17, 94, 10, 15, 37, 12, 5, 78, 2, -15];

// let min;

// for (let i = 0; i < values.length; i++) {
//   if (i === 0) {
//     min = values[i];
//   } else if (values[i] < min) {
//     min = values[i];
//   }
// }
// console.log(min);
// ----------------------------------------------------------------------------
//  Напиши функцію add для складання довільної
// кількості аргументів (чисел)
// const add = function () {
// перетворюємо в масив
//   const args = Array.from(arguments);
// вираховуємо
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));
// --------------------------------------------------------------------------
//  * Напиши функцію calAverage() яка приймає довільну кількість
//    * аргументів і повертає їхнє середнє значення. Усі аргументи
//    * будуть лише числами.
// function calAverage() {
//   const args = Array.from(arguments);
//   console.log(args);

//   let summ = 0;
//   for (let i = 0; i < args.length; i++) {
//     summ += args[i];
//   }
//   return summ / args.length;
// }
// console.log(calAverage(1, 2, 3, 4, 5, 6, 7, 8, 9));
// ---------------------------------------------------------------------------------
// Напиши функцію logItems(items), яка отримує масив та використовує цикл,
//    * який для кожного елемента масиву буде виводити в консоль повідомлення у
//    * форматі <номер елемента> - <значення елемента>. Нумерація елементів
//    * повинна починатися з 1.
//    *
//    * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
//    * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1}-${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// --------------------------------------------------------------------------------

//  Напиши функцію printInfo(names, phones) яка виводить
//    * у консоль ім'я та телефонний номер користувача. У параметри
//    * names та phones будуть передані рядки імен та телефонних номерів,
//    * розділені комами. Порядковий номер імен та телефонів у рядках
//    * вказують на відповідність. Кількість імен та телефонів
//    * гарантовано однакова.

// function printInfo(names, phones) {
//   const ArreyNames = names.split(',');
//   const ArreyPhones = phones.split(',');

//   for (let i = 0; i < ArreyNames.length; i++) {
//     console.log(`${ArreyNames[i]},${ArreyPhones[i]}`);
//   }
// }

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );
// ------------------Перевірка-------------------------------

// function printInfo(names, phones) {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

// Перевірка на рівність довжин масивів
//   if (namesArray.length !== phonesArray.length) {
//     console.error('Кількість імен та телефонів не співпадає');
//     return;
//   }

//   for (let i = 0; i < namesArray.length; i++) {
//     const name = namesArray[i];
//     const phone = phonesArray[i];
//     console.log(`Ім'я: ${name}, Телефон: ${phone}`);
//   }
// }
// ---------------------------------------------------------------------------------
// * Напиши функцію formatTime(minutes) яка переведе значення
//    * minutes (кількість хвилин) у рядок у форматі годин
//    * та хвилин HH:MM.

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;
//   console.log(hours);
//   console.log(minutes);

//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);
//   return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));
// --------------------------------------------------------------------------------------

//  Створити функцію яка буде розбивати початковий масив
// на потрібну кількість елементів розділюячи на декілька
// масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getCombination(array, qwintili) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     const comb = array.slice(i, i + qwintili);
//     arr.push(comb);
//   }
//   return arr;
// }

// console.log(getCombination(data, 3));
// --------------------------Об"єкти-------------------------------------------------------
// const obj = {
//   name: 'Alice',
//   age: 25,
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
// };

// obj.skills.js = true;

// console.log(obj);
// ----------------------------------------------------------------------------------------
//  Напиши скрипт, який для об'єкта user, послідовно:
//  * - додає поле mood зі значенням 'happy'
//  * - замінює значення hobby на 'skydiving'
//  * - замінює значення premium на false
//  * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: 'Alice',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);
// const keys = Object.keys(user);

// ----------------------Через функцію----------------------------------------------

// function foo(obj) {
//   obj.mood = 'happy';
//   obj.hobby = 'skydiving';
//   obj.premium = false;

//   const keys = Object.keys(obj);
//   for (const key of keys) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// foo(user);
// -------------------------------------------------------------------------------
//  * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
//  * підсумовування всіх зарплат і збережіть результат у змінній sum.
//  * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
//  */

// const salaries = {
//   Kate: 130,
//   Alice: 160,
//   Petya: 100,
// };

// function summa(obj) {
//   let total = 0;

//   const values = Object.values(obj);
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// }

// console.log(summa({}));
// ----------------------------------------------------------------------------
/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//     { name: "Смарагд", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2700, quantity: 3 },
//     { name: "Сапфір", price: 400, quantity: 7 },
//     { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(arr, name) {
//   let sum = 0;

//   for(const stone of arr) {
//     if(stone.name === name) {
//       sum += stone.price * stone.quantity;
//     }
//   }
//   return sum;
// }

// console.log(calcTotalPrice(stones, "Сапфір"));
// ------------------------------------ 4

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

//   /*
//    * Кожна транзакція це об'єкт із властивостями: id, type та amount
//    */

//   const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//       const transaction = { id: amount, amount, type };
//       return transaction;
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//       this.balance += amount;
//       const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push(transaction);
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//       if(this.balance < amount) {
//         console.log("недостатньо коштів");
//         return;
//       }

//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//       return this.balance;
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//       for(const item of this.transactions) {
//         if(item.id === id) {
//           return item;
//         }
//       }
//       return "Not found";
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//       let sum = 0;
//       for(const item of this.transactions) {
//         if(item.type === type) {
//           sum += item.amount;
//         }
//       }

//       return sum;
//     },
// };

// account.deposit(500);
// account.deposit(200);
// account.withdraw(100);
// console.log(account.getTransactionDetails(200))

// // console.log(account);
// // console.log(account.getBalance());

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// --------------------------------------------------------------------------------------
// -------------------------------9----------------------------------------
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//     console.log(items);
//     for (let i = 0; i < items.length; i += 1) {
//       console.log(`${i + 1} - ${items[i]}`);
//     }
//   }

// const logItems = (array) => {
//     array.forEach((item, index) => console.log(`${index + 1} - ${item}`))
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// const printContactsInfo = (obj) => {
//     const namesArr = obj.names.split(",");
//     const phonesArr = obj.phones.split(",");

//     namesArr.forEach((item, i) => {
//         console.log(`${item}: ${phonesArr[i]}`);
//     })
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calculateAverage = (...args) => {
//     let total = 0;

//     args.forEach(item => total += item);
//     return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// ------------------------------------------------ 4

/**
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//     { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//     { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//     { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//     { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//     { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//     { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//     { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//     { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//     { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

/**
 * Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
 */

// const getModels = (cars) => {
//     const res = [];

//     cars.forEach(car => res.push(car.model))
//     return res;
// }

// const getModels = (cars) => {
//     return cars.map(car => car.model);
// }
// const getModels = (cars) => cars.map(car => car.model);

// console.log(getModels(allCars));

/**
 * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
 * значенням властивості price залежно від переданої знижки.
 */

// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({ ...car, price: car.price * (1 - discount) }))

// console.table(makeCarsWithDiscount(allCars, 0.2));

// const players = [
//     { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//     { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//     { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//     { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//     { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

/*
 * Збільшуємо кількість годин гравця за id
 */
// const playerIdToUpdate = "player-3";

// const newArr = players.map(player => {
//     if(player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100
//         }
//     }

//     return player;
// })

// console.table(newArr);

// ------------------------------- 5

/**
 * Метод flatMap
 */

// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tags = tweets.flatMap(item => item.tags)

// console.log(tags);

// ------------------------------------10---------------------------------
/**
 * ---------------------------
 */
// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price < threshold);
// }

// console.table(filterByPrice(allCars, 24000));
/**
 * -----------------------------
 */
// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
// ];

/**
 * Шукаємо машину за моделлю
 */

// const getByModel = (cars, model) => cars.find(car => car.model === model)

// console.log(getByModel(cars, "Accord"));

/**
 * Рахуємо загальну суму товарів кошика
//  */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

// console.log(total);

/**
 * -------------------------------------
 */
// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
// ];

/**
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */

// const getModelsOnSale = (cars) => {
//   return cars
//     .filter(car => car.onSale)
//     .map(item => item.model)
// }

// console.log(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = (cars) => {
//   return cars
//     .filter(item => item.onSale)
//     .toSorted((a, b) => a.price - b.price)
// }

// console.table(getSortedCarsOnSale(allCars));

// --------------------------------11-------------------------
/**
 * -------------------------
 */

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */

// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(item => item.name === stoneName);
//         if(!stone) {
//             return `${stoneName} not found`;
//         }
//         return stone.price * stone.quantity;
//     }
// };

// console.log(chopShop.calcTotalPrice("lalala"));

// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log(`Авто зупинилось`);
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);

// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SPEED = 60;

// const bmw = {
//     speed: 30,
//     brand: "bmw"
// }

// const audi = {
//     speed: 70,
//     brand: "audi"
// }

// function speedLimit(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Автомобіль ${this.brand} рухається з безпечною швидкість`;
//     }
//     return `Автомобіль ${this.brand} перевищує швидкість`;
// }

// console.log(speedLimit.call(bmw, SPEED));

// const foo = speedLimit.bind(audi, SPEED);
// console.log(foo());

// const library = {
//     books: {
//       firstBooks: 35,
//       secondBooks: 125,
//     },
//     logBookCount() {
//         // console.log(this);

//       console.log(this.books.secondBooks);
//     },
//   };

// const showBooks = library.logBookCount.bind({ books: {secondBooks: 724} }); /*помилка*/

// showBooks();

// -----------------------------------12-----------------------------
// class Car {

//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.#model = model;
//         this.price = price;
//         Car.increment();
//     }

//     getModel() {
//         return this.#model;
//     }

//     changeModel(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price + 2000;
//     }

//     set price(newPrice) {
//         if(this.#checkType(newPrice, "number")) {
//             this.#price = newPrice;
//         }
//     }

//     #checkType(data, type) {
//         if(typeof data === type) {
//             return true
//         } else {
//             return false;
//         }
//     }
// }

// const audi = new Car({ brand: "audi", model: "Q7", price: 70000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 65000 });

// console.log("audi", audi);
// console.log("bmw", bmw);

// audi.changeModel("Q5");
// bmw.changeModel("x1");

// console.log(audi.getModel());
// console.log(bmw.getModel());

// audi.price = "30000";
// console.log(audi.price);

// console.log(Car.qty);

// --------------------------------------- 2

/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

// class Hero {
//     constructor({ name, xp }) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} received ${amount} xp`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//     constructor({ weapon, ...restProps }) {
//         super(restProps);
//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} attacks with ${this.weapon}`);
//     }
// }

// class Mage extends Hero {
//     constructor({ name, xp, spells }) {
//         super({ name, xp });
//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} is casting a spell`);
//     }
// }

// const arthas = new Warrior({ name: "Arthos", xp: 1000, weapon: "sword" })
// // arthas.gainXp(200)
// // console.log(arthas);

// const khadgar = new Mage({ name: "Khadrag", xp: 500, spells: ["fireball"]})

// khadgar.cast();
// khadgar.gainXp(100);

// console.log(khadgar);
// ---------------------------------13----------------------------------
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Creating elements</title>
//     <link rel="stylesheet" href="./css/style.css" />
//   </head>
//   <body>
//     <p><a href="./index.html">Go back</a></p>

//     <div class="hero">

//     </div>

//     <ul class="site-nav">
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">About</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">Portfolio</a>
//       </li>
//       <li class="site-nav__item">
//         <a href="" class="site-nav__link">Contacts</a>
//       </li>
//     </ul>

//     <script src="./js/04-create.js"></script>
//   </body>
// </html>

/*
 * Створення та додавання елементів
 */

// /*
//   Створюємо заголовок
//  */

// const titleEl = document.createElement('h1');

// titleEl.classList.add('page-title');
// titleEl.textContent = 'My title';

// document.body.append(titleEl);

// /*
//  * Створюємо зображення
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//  * valais-alpine-mountains-glacier
//  */

// const imageEl = document.createElement('img');
// imageEl.src =
//   'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
// imageEl.alt = 'valais-alpine-mountains-glacier';
// imageEl.width = 320;

// document.body.append(imageEl);

// const heroEl = document.querySelector('.hero');

// heroEl.append(titleEl, imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Profile';
// navLinkEl.href = '/profile';

// navItemEl.append(navLinkEl);

// const navEl = document.querySelector('.site-nav');
// navEl.append(navItemEl);

// -------------------------------------------------------------------
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Collections</title>
//     <link rel="stylesheet" href="./css/style.css" />
//   </head>
//   <body>
//     <p><a href="./index.html">Go back</a></p>

//     <div class="color-picker"></div>

//     <script src="./js/05-collections.js"></script>
//   </body>
// </html>
/*
 * Створюємо та додаємо колекцію
 */
// const options = [
//   { label: 'червоний', color: '#F44336' },
//   { label: 'зелений', color: '#4CAF50' },
//   { label: 'синій', color: '#2196F3' },
//   { label: 'сірий', color: '#607D8B' },
//   { label: 'рожевий', color: '#E91E63' },
//   { label: 'індіго', color: '#3F51B5' },
// ];

// const colorPickerContainerEl = document.querySelector('.color-picker');

// const elements = options.map((option) => {
//   const buttonEl = document.createElement('button');
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// colorPickerContainerEl.append(...elements);

// //  * Пишемо функцію для створення розмітки колорпікера
// //  */
// const createMarkup = (arr) => {
//   return arr.map((option) => {
//     const buttonEl = document.createElement('button');
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// colorPickerContainerEl.append(...createMarkup(options));

// const createMarkup = (arr) => {
//   const elements = arr.map((item) => {
//     const btn = document.createElement('button');
//     btn.classList.add('color-picker__option');
//     btn.textContent = item.label;
//     btn.style.backgroundColor = item.color;

//     return btn;
//   });

//   return elements;
// };

// colorPickerContainerEl.append(...createMarkup(options));
// -----------------------------------------------------------------------
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Transactions</title>
//     <link rel="stylesheet" href="./css/style.css" />
//   </head>
//   <body>
//     <p><a href="./index.html">Go back</a></p>

//     <table class="transaction-table js-transaction-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Amount</th>
//           <th>Date</th>
//           <th>Who</th>
//           <th>Transaction Type</th>
//           <th>Account Name</th>
//           <th>Account Number</th>
//         </tr>
//       </thead>
//     </table>

//     <script src="./js/07-transactions.js"></script>
//   </body>
// </html>

// const transactionHistory = [
//   {
//     id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//     amount: '179.07',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Bogan - DuBuque',
//     name: 'Auto Loan Account 7313',
//     type: 'deposit',
//     account: '19808943',
//   },
//   {
//     id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
//     amount: '930.87',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Legros, Weimann and Treutel',
//     name: 'Auto Loan Account 0721',
//     type: 'invoice',
//     account: '38277848',
//   },
//   {
//     id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
//     amount: '704.53',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Beatty, Wisozk and Koch',
//     name: 'Savings Account 1894',
//     type: 'withdrawal',
//     account: '76727204',
//   },
//   {
//     id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
//     amount: '656.81',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Hane - Bode',
//     name: 'Personal Loan Account 2316',
//     type: 'withdrawal',
//     account: '27462350',
//   },
//   {
//     id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
//     amount: '280.21',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Schulist - Waelchi',
//     name: 'Savings Account 9032',
//     type: 'payment',
//     account: '99923313',
//   },
//   {
//     id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
//     amount: '303.06',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Swaniawski - Hayes',
//     name: 'Checking Account 0573',
//     type: 'invoice',
//     account: '75028346',
//   },
//   {
//     id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
//     amount: '462.59',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Berge - Reinger',
//     name: 'Personal Loan Account 8173',
//     type: 'invoice',
//     account: '93437240',
//   },
//   {
//     id: '247e150a-71ba-4df7-9836-5bb400e012bb',
//     amount: '242.49',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Stroman Inc',
//     name: 'Savings Account 1383',
//     type: 'withdrawal',
//     account: '18476423',
//   },
//   {
//     id: '6224c740-ff23-429d-854a-c7b310f7653b',
//     amount: '770.94',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Johns - Pagac',
//     name: 'Auto Loan Account 1392',
//     type: 'invoice',
//     account: '07680863',
//   },
//   {
//     id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
//     amount: '788.40',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Ullrich, Shields and Koelpin',
//     name: 'Personal Loan Account 8318',
//     type: 'invoice',
//     account: '07081761',
//   },
// ];

// const tableEl = document.querySelector('.js-transaction-table');

// const markup = transactionHistory
//   .map(
//     (item) => `
//   <tr>
//     <td>${item.id}</td>
//     <td>${item.amount}</td>
//     <td>${item.date}</td>
//     <td>${item.business}</td>
//     <td>${item.type}</td>
//     <td>${item.name}</td>
//     <td>${item.account}</td>
//   </tr>
// `
//   )
//   .join('');

// tableEl.insertAdjacentHTML('beforeend', markup);

// --------------------------------14------------------------------------
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Search</title>
//     <link rel="stylesheet" href="./css/style.css" />
//     <!-- <link rel="stylesheet" href="./css/modal.css" /> -->
//   </head>
//   <body>
//     <p><a href="index.html">Go back</a></p>

//     <form action="submit" class="js-form car-search">
//       <div class="car-group">
//         <input type="text" name="query" class="car-input" placeholder="Пошук" />
//       </div>
//       <div class="car-group">
//         <select name="options" class="car-select">
//           <option value="car">Марка</option>
//           <option value="type">Модель</option>
//         </select>
//       </div>
//       <button type="submit" class="car-button">Пошук</button>
//     </form>

//     <ul class="js-list car-list"></ul>

//     <script src="./js/06-practice.js"></script>
//   </body>
// </html>

/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку
 * і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в
 * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто
 * які збігаються з критеріями пошуку
 */

// const cars = [
//     {
//       id: 1,
//       car: "Audi",
//       type: "A6",
//       price: 30000,
//       img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//     },
//     {
//       id: 2,
//       car: "Honda",
//       type: "Civic",
//       price: 12000,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//       id: 3,
//       car: "Audi",
//       type: "Q7",
//       price: 40000,
//       img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//       id: 4,
//       car: "BMW",
//       type: "5 siries",
//       price: 9000,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//       id: 5,
//       car: "Honda",
//       type: "Accord",
//       price: 20000,
//       img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//       id: 6,
//       car: "Volvo",
//       type: "XC60",
//       price: 7000,
//       img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
// ];

// const form = document.querySelector(".js-form");
// const container = document.querySelector(".js-list");

// function createMarkup(arr) {
//   return arr
//     .map(car => `
//         <li class="car-card" data-id="${car.id}">
//           <img src="${car.img}" alt="${car.type}" class="car-image">
//           <h2 class="car-title">${car.car}</h2>
//           <h3 class="car-type">${car.type}</h3>
//           <span class="car-price">${car.price}$</span>
//         </li>
//       `)
//       .join("")
// }

// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.gap = "25px";
// container.insertAdjacentHTML("beforeend", createMarkup(cars));

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const elements = event.target.elements;
//   const query = elements.query;
//   const option = elements.options;

// const obj = {
//   id: 6,
//   car: "Volvo",
//   type: "XC60",
//   price: 7000,
//   img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
// }

// console.log(option.value);
// console.log(obj[option.value].toLowerCase().includes(query.value.toLowerCase()));

//   const result = cars
//     .filter(item => item[option.value].toLowerCase().includes(query.value.toLowerCase()))

//   container.innerHTML = createMarkup(result);
// }
