// ---------------Приклад передачі виклику функції з круглими дужками-----------------

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Mango')); // "Welcome Mango!"

// У другому лозі передається посилання на функцію, а не результат її виклику(відсутні круглі дужки),
//     тому в консоль виводиться внутрішнє представлення нашої функції.
//  Це означає, що посилання на функцію можна записати у змінну або передати як аргумент іншій функції.
// Виводимо функцію greet у консоль, не викликаючи її

// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// -------------------------------Колбек-функції------------------------------------------------------
// Оголосимо дві функції greet і notify, які приймають ім'я користувача і виводять різні повідомлення.

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// Далі оголосимо ще одну функцію registerGuest, яка прийматиме два параметри.

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// name — ім’я користувача
// callback — посилання на функцію, яку треба викликати в тілі registerGuest і передати їй ім'я користувача
// Тепер використовуємо оголошені функції під час виклику registerGuest.

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest('Mango', greet); // "Registering Mango!"
// "Welcome Mango!'
// registerGuest('Mango', notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"
// Ми передаємо посилання на функцію greet або notify як аргумент,
//     тому вони будуть присвоєні в параметр callback і викликані всередині функції registerGuest за допомогою круглих дужок.

// Функція зворотного виклику(callback, колбек) — це функція, яка передається іншій функції як аргумент,
//     а та у свою чергу використовує передану функцію.

// У прикладі функції greet і notify — це колбек - функції,
//     тому що ми передаємо їх як аргумент у функцію registerGuest.
// Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// Функція вищого порядку(higher order function) — функція, яка приймає в якості параметрів
// інші функції або повертає функцію в якості результату.
// У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.
// ---------------------------------------------------------------------------

// Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок з повідомленням клієнту.

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback)
// колбек - функцію і повертала результат її виклику.Функції deliverPizza або makePizza будуть передаватися
// як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Royal Grand', makePizza));
// повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza));
// повертає рядок "Delivering Ultracheese pizza."

// ------------------------------Інлайн-колбеки---------------------------------------

// Якщо колбек - функція маленька і потрібна тільки для передачі аргументом,
//     її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек.
// Такі функції називаються інлайн - колбеки.Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// Передаємо інлайн-функцію greet у якості колбека
// registerGuest('Mango', function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// Передаємо інлайн-функцію notify у якості колбека
// registerGuest('Poly', function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });
// ----------------------------------------------------------------------------------
// Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію.
// Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом
// інлайн колбек - функцію eatPizza(pizzaName).Колбек eatPizza логує рядок "Eating pizza <назва піци>",
//     де < назва піци > це значення параметра pizzaName.

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });
// -------------------------------------------------------------------------
// -----------------------------Метод forEach(callback)-----------------------

// Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// array.forEach(function callback(element, index, array) {
// Тіло колбек-функції
// });

// Поелементно перебирає масив array
// Викликає колбек-функцію для кожного елемента масиву
// Повертає undefined, навіть якщо явно задати вираз після return

// Колбек - функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element,
//     його індекс index і власне посилання на вихідний масив array.Зверни увагу, що імена параметрів довільні,
//     але дуже важлива їх послідовність(!).Також не всі параметри обов’язково оголошувати.
//         Якщо тобі потрібен тільки перший параметр element(це найчастіший випадок),
//     то наступні параметри index та array можна не оголошувати.

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі
//  з перериванням виконання циклу.Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
// -----------------------------------------------------------------------------------------------------
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//     і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Доповни виклик метода forEach, передавши йому колбек - функцію,
//     яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

// Оголошена функція calculateTotalPrice(orderedItems)

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//     console.log(item);---перевірка вибору item
//   });
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));
// повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// -----------------------------------------------------------------------------------------
// Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву,
// які більші за значення другого параметра числа value.Якщо таких значень не буде знайдено, функція повертає порожній масив.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach

// function filterArray(numbers, value) {
//   const ArrFilter = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       ArrFilter.push(number);
//     }
//   });
//   return ArrFilter;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
//  повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));
//  повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
//  повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38));
//  повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//  повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// -----------------------------------------------------------------------
// ---------------------------Стрілочні функції---------------------------------
// Стрілочні функції: синтаксис
// Стрілочні функції(сленг — “стрілки”) мають скорочений, лаконічніший синтаксис,
//   що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.

// Усі стрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.
// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Ключове слово function не використовується
// Одразу зазначається оголошення параметрів
// Після параметрів використовується символ => і тіло функції у фігурних дужках
// Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };
// Якщо параметр один, його можна оголошувати без круглих дужок.
// const add = a => {
//   return a + 5;
// };
// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
// const greet = () => {
//   console.log("Hello!");
// };
// ------------------------------------------------------------------------------
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));
//  повертає 500
// console.log(calculateTotalPrice(8, 60));
//  повертає 480
// console.log(calculateTotalPrice(3, 400));
//  повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// ----------------------------------Неявне повернення---------------------------------------------------------

// У стрілочної функції після символу => знаходиться її тіло. Існує два способи запису: з фігурними дужками і без них.
// Запис із фігурними дужками
// Якщо є фігурні дужки і функція повинна повертати якесь значення, необхідно явно поставити return.
// Це називається явне повернення(explicit return).

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// Такий синтаксис використовується в тому випадку, якщо в тілі функції потрібно виконати ще якісь інструкції, окрім повернення значення.

// Запис без фігурних дужок
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>.
// Це називається неявне повернення(implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

// const add = (a, b, c) => a + b + c;
// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається.
// Тим не менш, він доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, окрім повернення значення.

// До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// Після
// const arrowAdd = (a, b, c) => a + b + c;
// -------------------------------------------------------------------------------------
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// У функції використане неявне повернення

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));
//  повертає 500
// console.log(calculateTotalPrice(8, 60));
//  повертає 480
// console.log(calculateTotalPrice(3, 400));
//  повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ----------------------------------﻿Псевдомасив arguments-------------------------------------------------------
// У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи.
// Якщо необхідно зібрати всі аргументи в масив, використовується операція rest.

// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]
// -----------------------------------------Колбеки---------------------------------------------------------------------------
// Анонімні стрілочні функції відмінно підходять для колбеків перебираючих методів масиву
// завдяки коротшому синтаксису оголошення, особливо якщо код у тілі функції не громіздкий.

// const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });
// Стрілочну колбек - функцію також можна оголошувати окремо й передавати на неї посилання.
// Це варто робити, якщо одна функція використовується в декількох місцях програми або якщо вона громіздка.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);
// ----------------------------------------------------------------------------
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.
// Також заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));
//  повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));
//  повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
//  повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// ----------------------------------------------------------------------------------------
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
//  повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));
//  повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
//  повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38));
//  повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//  повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// --------------------------------Методи map і flatMap-----------------------------------------------
// Чисті функції
// Функція з побічними ефектами — це функція, яка в процесі виконання може:
// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// сФункція dirtyMultiply(array, value) множить кожен елемент масиву array на число value.
// Вона змінює(мутує) вихідний маив за посиланням.

// Чиста функція(pure function) — це функція, результат якої залежить тільки від значень переданих аргументів.
//  За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.

// Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

// const pureMultiply = (array, value) => {
// const newArray = [];

// array.forEach(element => {
// newArray.push(element * value);
// });

// return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// -----------------------------------------------------------------------
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
// значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
// а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// function changeEven(numbers, value) {
// Створюємо новий масив для результату, щоб не змінювати вихідний
// const newNumbers = [];

// Перебираємо кожен елемент вихідного масиву
// numbers.forEach((number) => {
// Якщо число парне, додаємо до нього value і додаємо в новий масив
// if (number % 2 === 0) {
// newNumbers.push(number + value);
// } else {
// Якщо число непарне, просто додаємо його в новий масив без змін
// newNumbers.push(number);
// }
// });

// Повертаємо новий масив
// return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
//  повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//  повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100));
//  повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
//  повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// --------------------------------Перебираючі методи--------------------------------------
// У JavaScript є методи масивів, які прийшли з функціональних мов.
// Більшість із перебираючих методів масивів — це чисті функції.Вони створюють новий масив, заповнюють його,
//   застосовуючи до значення кожного елемента зазначену колбек - функцію, після чого повертають цей новий масив.

// Усі перебираючі методи масивів мають схожий синтаксис.На вихідному масиві array викликається перебираючий метод method,
//   у який аргументом передається колбек - функція callback.

// array.method(callback(currentValue, index, array))

// У більшості методів колбек-функції, які є їхнім аргументом, отримують три наступні параметри:

// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array

// array.method((item, idx, arr) => {
// логіка, яка буде виконуватися на кожній ітерації
// });

// Усі параметри, окрім значення поточного елемента масиву item, необов'язкові.
// Назви параметрів можуть бути будь - які, головне, щоб вони були зрозумілі тобі та іншим розробникам.

// array.method(item => {
// логіка, яка буде виконуватися на кожній ітерації
// });
// ----------------------------------Метод map()----------------------------------------------------------------
// Більшість перебираючих методів масиву — це чисті функції.Вони створюють новий масив, заповнюють його,
//   застосовуючи до значення кожного елемента зазначену колбек - функцію, після чого повертають цей новий масив.

// Метод map(callback) використовується для трансформації масиву.Він викликає колбек - функцію для кожного елемента
//  вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.

// array.map((element, index, array) => {
// Тіло колбек-функції
// });
// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

// Його можна використовувати для того, щоб змінити кожен елемент масиву.Оригінальний масив використовується як еталон,
//   на основі якого можна зробити іншу колекцію.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек - функції,
//   що робить код чистішим і простішим для сприйняття.
// ---------------------------------------------------------------------------------
// В масиві planets зберігаються назви планет.Доповни код таким чином,
//   щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets.
//     Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets;

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// ------------------------------Масив об'єктів-----------------------------------------------------
// Ми вже знаємо, що типове завдання — це маніпуляція масивом об'єктів.
// Наприклад, отримати масив значень властивості з усіх об'єктів.
//  У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];
// const names = students.map((student) => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Використовуючи метод map(), можна перебрати масив об'єктів, і в колбек-функції
// повернути значення властивості кожного з них.
// --------------------------------------------------------------------------------------------------
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв усіх книг(властивість title) з масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив["The Last Kingdom", "Beside Still Waters",
//   "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books;

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);

// ---------------------------Метод flatMap()----------------------------------------------
// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках,
// коли результат — це багатовимірний масив, який необхідно «розгладити».

// array.flatMap((element, index, array) => {
// Тіло колбек-функції
// });

// У масиві students зберігається колекція студентів зі списком предметів, які відвідує студент у властивості courses.
//  Кілька студентів можуть відвідувати один і той самий предмет.Необхідно скласти список всіх предметів,
//   які відвідує ця група студентів, поки що навіть повторюваних.

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// Метод flatMap викликає колбек - функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив.
//  Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці(одна вкладеність).
//  Цей розгладжений(плоский) масив і є результатом роботи flatMap().
// ------------------------------------------------------------------------------------------
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивість genres, значенням якої є масив жанрів.
//  Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив жанрів усіх книг(властивість genres) з масиву books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив ["adventure", "history", "fiction", "horror", "mysticism"]
// Для перебирання масиву books використовується метод flatMap()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books;

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);
// ------------------------------------------------------------------------------------------
//
// Доповни стрілочну функцію getUserEmails(users) таким чином,
//   щоб вона повертала масив поштових адрес користувачів(властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserEmails
// Змінній getUserEmails присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає
// масив["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com",
//   "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

// const getUserEmails = (users) => {
// слово повертає - будь уважний
//   return users.map((user) => user.email);
// };

// console.log(
//   getUserEmails([
//     {
//       name: 'Moore Hensley',
//       email: 'moorehensley@indexia.com',
//       eyeColor: 'blue',
//       friends: ['Sharron Pace'],
//       isActive: false,
//       balance: 2811,
//       skills: ['ipsum', 'lorem'],
//       gender: 'male',
//       age: 37,
//     },
//     {
//       name: 'Sharlene Bush',
//       email: 'sharlenebush@tubesys.com',
//       eyeColor: 'blue',
//       friends: ['Briana Decker', 'Sharron Pace'],
//       isActive: true,
//       balance: 3821,
//       skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//       gender: 'female',
//       age: 34,
//     },
//     {
//       name: 'Ross Vazquez',
//       email: 'rossvazquez@xinware.com',
//       eyeColor: 'green',
//       friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//       isActive: false,
//       balance: 3793,
//       skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//       gender: 'male',
//       age: 24,
//     },
//     {
//       name: 'Elma Head',
//       email: 'elmahead@omatom.com',
//       eyeColor: 'green',
//       friends: ['Goldie Gentry', 'Aisha Tran'],
//       isActive: true,
//       balance: 2278,
//       skills: ['adipisicing', 'irure', 'velit'],
//       gender: 'female',
//       age: 21,
//     },
//     {
//       name: 'Carey Barr',
//       email: 'careybarr@nurali.com',
//       eyeColor: 'blue',
//       friends: ['Jordan Sampson', 'Eddie Strong'],
//       isActive: true,
//       balance: 3951,
//       skills: ['ex', 'culpa', 'nostrud'],
//       gender: 'male',
//       age: 27,
//     },
//     {
//       name: 'Blackburn Dotson',
//       email: 'blackburndotson@furnigeer.com',
//       eyeColor: 'brown',
//       friends: ['Jacklyn Lucas', 'Linda Chapman'],
//       isActive: false,
//       balance: 1498,
//       skills: ['non', 'amet', 'ipsum'],
//       gender: 'male',
//       age: 38,
//     },
//     {
//       name: 'Sheree Anthony',
//       email: 'shereeanthony@kog.com',
//       eyeColor: 'brown',
//       friends: ['Goldie Gentry', 'Briana Decker'],
//       isActive: true,
//       balance: 2764,
//       skills: ['lorem', 'veniam', 'culpa'],
//       gender: 'female',
//       age: 39,
//     },
//   ])
// );
// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// ------------------------------------Методи filter і find-----------------------------------------------------------
// Метод filter()
// Метод filter(callback) використовується для єдиної операції — фільтрації масиву.
//  Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм.

// array.filter((element, index, array) => {
// Тіло колбек-функції
// });

// Не змінює оригінальний масив.
// Поелементно перебирає оригінальний масив.
// Повертає новий масив.
// Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// Якщо колбек повернув true, елемент додається в масив, що повертається.
// Якщо колбек повернув false, елемент не додається в масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

// Отже, метод filter викликає колбек - функцію для кожного елемента вихідного масиву.
// Якщо результат її виконання true, поточний елемент додається в новий масив.
// -------------------------------------------------------------------------------------
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers,
//   а у змінній oddNumbers — масив непарних.Обов'язково використовуй метод filter().

// Оголошено змінну numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошено змінну evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошено змінну oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебору масиву numbers використано метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers;
// const oddNumbers = numbers;

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => !(number % 2 === 0));
// інший запис
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ----------------------------Метод filter() на масиві об'єктів-----------------------------------------------------
// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості.
// У підсумку утворюється новий масив відфільтрованих об'єктів.
// Розгляньмо приклад, де є масив студентів з балами за тест. Необхідно відфільтрувати студентів, які мають:
// високі бали (від 80 (включно)),
// низькі бали (нижче 50),
// середні бали (від 50 (включно) до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// У прикладі вище метод filter() створює новий масив із тими об'єктами з масиву students,
//  які задовольняють умови, встановлені на основі властивості score.Умови визначаються в колбек - функції,
//   яка передається у filter() як аргумент.
// У змінну best відфільтровано об'єкти, в яких значення властивості score більше або дорівнюєHIGH_SCORE.
//  Результатом буде масив об'єктів з іменами "Mango" і "Kiwi".
// У змінну worst — об’єкти, в яких значення властивості score менше LOW_SCORE. Результатом буде масив з одним об'єктом з іменем "Ajax".
// У змінну average — об'єкти, в яких значення властивості score більше або дорівнює LOW_SCORE і менше HIGH_SCORE.
// Результатом буде масив об'єктів з іменами "Poly" і "Houston".
// --------------------------------------------------------------------------------------------
// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг,
//   рейтинг яких(властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг,
//   написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter((book) => book.rating > MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author == AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);
// --------------------------------------------------------------------------------------
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
//   у яких колір очей(властивість eyeColor) збігається зі значенням другого параметра color.

// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив
//  об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив
//  об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив
//  об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// const getUsersWithEyeColor = (users, color) => { };
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const usersWithBlueEyes = getUsersWithEyeColor(users, 'green');

// console.log(usersWithBlueEyes);

// ---------------------------------------------------------------------------------------------------

// Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів,
// вік(збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.

// Поради:
// Використай метод filter() для створення нового масиву, в якому зберігаються тільки елементи, які задовольняють певну умову.
// Використай оператори >= (більше або дорівнює) та <= (менше або дорівнює), щоб відфільтрувати
// користувачів, вік яких точно потрапляє у діапазон між мінімальним minAge та максимальним maxAge значеннями.
// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно,
//  функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно,
//  функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно,
//  функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const usersWithAge = getUsersWithAge(users, 20, 30);

// console.log(usersWithAge);
// --------------------------------Метод find()-----------------------------------------------
// Ти вже знаєш, що метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову.
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову,
// після чого перебирання масиву припиняється.Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

// array.find((element, index, array) => {
// Тіло колбек-функції
// });

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined

// Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову.
// Наприклад, пошук користувача за поштою, автомобіля — за серійним номером, книги — за назвою тощо.

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.find((option) => option.label === 'blue'); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === 'pink'); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === 'white'); // undefined

// ---------------------------------------------------------------------------------

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating.
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books;
// const bookByAuthor = books;

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';

// const bookWithTitle = books.find((book) => book.title == BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author == AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);
// ------------------------------------------------------------------------------------------
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
// пошта якого(властивість email) збігається зі значенням другого параметра email.

// Оголошена функція getUserWithEmail
// Змінній getUserWithEmail присвоєна стрілочна функція з параметрами (users, email)
// Для перебирання параметра users використовується метод find()
// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony
// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head
// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson
// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// const getUserWithEmail = (users, email) => { };

// ---------------------------------Методи every, some і reduce---------------------------------------------------
// Метод every()
// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.
// array.every((element, index, array) => {
// Тіло колбек-функції
// });
// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо всі елементи масиву задовольняють умову
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає false
// Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// Під час роботи з масивом об'єктів перевіряється значення якоїсь їхньої властивості.
// Наприклад, перебираючи масив об'єктів товарів, ми можемо перевірити, чи всі товари є в наявності.
// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];
// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false
// ------------------------------------------------------------------------------------------------
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
// чи всі користувачі зараз активні(властивість isActive) і повертала true або false.

// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false

// const isEveryUserActive = (users) => { };

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// console.log(isEveryUserActive(users));
// ----------------------------Метод some()--------------------------------------------------
// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

// array.some((element, index, array) => {
// Тіло колбек-функції
// });

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо хоча б один елемент масиву задовольняє умову
// Повертає false, якщо жоден елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// Зверни увагу на відмінність між методом every та методом some: Метод every() перевіряє,
//     чи задовольняють усі елементи умову колбек - функції.Метод some() перевіряє,
// чи задовольняє хоча б один елемент умову колбек - функції.
// ---------------------------------------------------------------------
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність хоча б
//  одного активного користувача(властивість isActive) і повертала true або false.

// Оголошена функція isAnyUserActive
// Змінній isAnyUserActive присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true

// const isAnyUserActive = (users) => {};
// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive);
// };
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// console.log(isAnyUserActive(users));
// ---------------------------------Метод reduce()------------------------------------------------
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву
// із збереженням проміжного результату.Трохи складніший за інші методи для засвоєння, але результат вартий того.

// array.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
// }, initialValue);

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає все, що завгодно (об’єкт, масив, рядок, число тощо)
// Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:

// 1-й параметр (обов’язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов’язковий) — initialValue початкове значення акумулятора.

// Колбек - функція з параметра редьюса очікує в свою чергу чотири параметри.
//  Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати,
// якщо вони вам не потрібні, але не можна порушувати їх послідовність:

// 1 - й параметр(previousValue) — це акумулятор, тобто проміжний результат.
// Значення, яке поверне колбек - функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(total); // 12

// Розгляньмо детальніше роботу редьюса у прикладі вище:
// Початкове значення акумулятора 0
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 12
// Результатом коду вище буде 12.
// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного».
// У повсякденних завданнях його застосування зводиться до роботи з числами.
// ------------------------------------------------------------------------------------
// Ігровому сервісу необхідний функціонал підрахунку середнього часу,
// проведеного в іграх, одним гравцем.У змінній players зберігається об'єкт, де ключ це ім'я гравця,
//  а значення - його ігровий час.У змінній playtimes зберігається масив значень об'єкта players,
//  тобто масив ігрового часу усіх гравців.Значенням змінної averagePlayTime буде середній час,
// проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().

// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив [1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes;

// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);
// -----------------------------------Метод reduce() і масив об'єктів--------------------------------------------------------
// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
// Наприклад, у нас є масив студентів з балами за тест.Необхідно отримати середній бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;

// У прикладі вище метод reduce() використовується для обчислення суми
// значень властивості score для всіх об'єктів масиву students.

// Починаючи зі значення 0, колбек - функція обчислює суму значень властивості score для
// кожного об'єкта масиву students. Результат (сума) зберігається у змінній totalScore.
// const averageScore обчислює середнє значення score для всіх об'єктів масиву students,
//  шляхом ділення суми всіх балів на кількість студентів.
// ------------------------------------------------------------------------------------------
// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
// і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame.
// Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Поради:

// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed,
// щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.
// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, players) => {
//   const averageTotal = players.playtime / players.gamesPlayed;
//   return acc + averageTotal;
// }, 0);

// console.log(totalAveragePlaytimePerGame);
// ----------------------------------------------------------------------------
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала
// і повертала суму всіх коштів(властивість balance), які зберігають користувачі з масиву users.

// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916

// const calculateTotalBalance = (users) => {};

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// const user = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// console.log(calculateTotalBalance(user));
// ------------------------Метод toSorted--------------------------------
// Метод toSorted()
// Метод toSorted() сортує елементи масиву.

// array.toSorted();
// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням
// Масив чисел
// Розгляньмо приклад, де потрібно відсортувати масив scores.
// Вихідний масив scores залишається незмінним.Новий масив ascendingScores містить масив чисел,
//     що відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків,
//     то фактично елементи сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode.
// Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло,
//     якщо знати, що числа були перетворені на рядки.

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// При такому сортуванні рядки порівнюються за символами зліва направо, тобто спочатку порівнюються рядки 2 і 27.
// Перший символ 2 у них однаковий, але рядок 2 містить лише 1 символ, тому він менший, ніж рядок 27, і йде першим.

// Потім порівнюються рядки 27 і 3. Перший символ у рядку 3 більший за перший символ 2 у рядку 27, тому 3 йде після 27.
// Способи задати власний порядок сортування розглянемо в наступному розділі.
// Масив рядків
// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]
// ---------------------------------------------------------------------------
// Змінна releaseDates - це масив чисел, років видання книг. Змінна authors - це масив рядків, авторів книг.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
// відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
// відсортована за алфавітом.Використовуй метод toSorted()
// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]
// Використаний метод toSorted()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ----------------------------Свій порядок сортування чисел----------------------------------------
// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами.
// Це функція порівняння(compare function), порядок сортування залежить від її результату.
// Метод toSorted() буде викликати її для двох довільних елементів.

// array.toSorted((a, b) => {
//   // Callback function body
// });

// a — перший елемент для порівняння.
//     b — другий елемент для порівняння.

// Сортування за зростанням

// Якщо виклик compareFunction(a, b) повертає будь - яке негативне значення, тобто a менше b, сортування поставить a перед b.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Сортування за спаданням

// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного,
//  але відсортує їх по відношенню до всіх інших елементів.
// Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() колбек - функції,
// числа вже не будуть приводитися до рядків, тобто їх сортування буде очікуваним і звичним.
// -----------------------------------------------------------------------------------
// Змінна releaseDates - це масив чисел, років видання книг.

// Онлайн бібліотеці необхідно відображати книги, відсортовані за датою видання, за їх зростанням або спаданням.
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//     відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Методи every, some і reduce

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// ---------------------------------Свій порядок сортування рядків------------------------------------------
// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

// firstString.localeCompare(secondString)
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

// Метод localeCompare() зручно використовувати для сортування рядків,
// оскільки метод toSorted() очікує такі самі значення від колбек - функції.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
// ----------------------------------------------------------------------------------------
// Змінна authors - це масив рядків, авторів книг.

// Онлайн бібліотеці необхідно відображати книги, відсортовані за автором в алфавітному і в зворотному алфавітному порядку.
//  Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
//     а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// Оголошена змінна authors
// Значення змінної authors - це масив
//  ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив
//  ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив
//  ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод toSorted()
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);
// --------------------------------Сортування об'єктів-------------------------------------------------
// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості.
// Наприклад, у нас є група студентів з балами за тест.Необхідно відсортувати масив об'єктів за трьома різними сценаріями:

// за зростанням кількості балів
// за спаданням кількості балів
// за ім'ям студента в алфавітному порядку

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// -----------------------------------------------------------------------------------------
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг

// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод toSorted()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     rating: 7.94,
//   },
//   {
//     title: 'Enemy of God',
//     author: 'Bernard Cornwell',
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books;

// const sortedByReversedAuthorName = books;

// const sortedByAscendingRating = books;

// const sortedByDescentingRating = books;

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// --------------------------------Ланцюжки методів--------------------------------------------------
// У нас є масив об'єктів з іменами, балами й відвідуваними предметами кожного студента.

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.

// Для цього:
// Відсортуємо масив методом toSorted(),
// Після чого методом map() створимо масив значень властивості name з відсортованого масиву.

// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// Проблема в тому, що в нас з'являються проміжні змінні після кожної операції, крім фінальної.
// Змінна sortedByAscendingScore — зайва.Вона необхідна тільки для зберігання проміжного результату.

// Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки.
//  Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// На масиві викликаємо метод toSorted()
// До результату роботи методу toSorted() застосовуємо метод map()
// Змінній names присвоюється результат роботи методу map()

// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// На результаті методу filter() викликаємо toSorted()
// Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()

// Ланцюжок методів може бути довільної довжини, але зазвичай не більше 2-3 операцій.

//  По - перше, перебираючі методи використовуються для порівняно простих операцій над колекцією.
//     По - друге, виклик кожного наступного методу — це додаткове перебирання масиву,
//     що за великої кількості може позначитися на продуктивності.
// ------------------------------------------------------------------------------------
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
// рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.Використовуй ланцюжок методів.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Змінна names повинна формуватися за допомогою ланцюжка методів filter, map, toSorted,
// при цьому інші змінні не повинні оголошуватись
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);
// ----------------------------------------------------------------------------
