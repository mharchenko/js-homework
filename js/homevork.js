//  Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
//  рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
//  то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 26;
// let message;

// if (minutes > 0) {
//   message = `${hours}г.${minutes}хв.`;
// } else {
//   message = `${hours}г.`;
// }

// console.log(message);

// ------------------------------------------
// Правильний формат написання тернарного запису
// const hours = 14;
// const minutes = 26;

// const message = minutes > 0 ? `${hours}г.${minutes}хв.` : `${hours}г.`;
// console.log(message);

// ------------------------------------------------------
// Виконай рефакторинг коду задачі використовуючи switch.
//  *
//  * Якщо до дедлайну 0 днів - виведи рядок "Today"
//  * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
//  * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
//  * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"

// const deadLine = 3;
// switch (deadLine) {
//   case 0:
//     console.log('Today');
//     break;

//   case 1:
//     console.log('Tomorrow');
//     break;

//   case 2:
//     console.log('Overmorrow');
//     break;
//   default:
//     console.log('Date in the future');
// }
// --------------------------------------------------
// switch переписати функцією,
// зверни увагу оголошення case та запит функції

// function deadLineDay(deadLine) {
//   switch (deadLine) {
//     case 0:
//       return 'Today';
//     case 1:
//       return 'Tomorrow';
//     case 2:
//       return 'Overmorrow';
//     default:
//       return 'Date in the future';
//   }
// }

// console.log(deadLineDay(0));
// console.log(deadLineDay(1));
// console.log(deadLineDay(2));
// console.log(deadLineDay(3));
// ------------------------------------------

// Напиши скрипт выбора опції доставки товару.
//  * Опция зберігається у змінній option: 1 - самовывоз, 2 - курьер, 3 - пошта
//  *
//  * У змінну message записати повідомлення залежно від опції.
//  * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
//  * - 'Курьер доставить замовлення завтра з 9:00 до 18:00'
//  * - 'Посилка буде відправленна сьогодні'
//  * - 'Вам передзвонить менеджер'

// const option = 1;
// let message;

// switch (option) {
//   case 1:
//     message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//     break;

//   case 2:
//     message = 'Курьер доставить замовлення завтра з 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Посилка буде відправленна сьогодні';
//     break;
//   default:
//     message = 'Вам передзвонить менеджер';
// }
// console.log(message);

// те саме завдання але через функцію

// function deleryShopProduct(deleryShop) {
//   switch (deleryShop) {
//     case 1:
//       return 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//     case 2:
//       return 'Курьер доставить замовлення завтра з 9:00 до 18:00';
//     case 3:
//       return 'Посилка буде відправленна сьогодні';
//     default:
//       return 'Вам передзвонить менеджер';
//   }
// }

// console.log(deleryShopProduct(1));
// console.log(deleryShopProduct(2));
// console.log(deleryShopProduct(3));
// console.log(deleryShopProduct(4));

// --------------------------------------------
// * Напиши скрипт перевірки підписки користувача при доступі до контента
//  * - Є три типа підписки: free, pro і vip.
//  * - Отримати доступ можуть тільки користувачі pro і vip
//  */

// const sub = 'pro';
// let canConnect;

// if (sub === 'pro' || sub === 'vip') {
//   canConnect = true;
// } else {
//   canConnect = false;
// }

// console.log('can connect', canConnect);

// через тернарний оператор

// const sub = 'free';

// const canConnect = sub === 'pro' || sub === 'vip';

// console.log('can connect', canConnect);

// Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
//  * Для цього, користувач має бути:
//  * - другом
//  * - онлайн
//  * - без режима не турбувати
//  */

// const isOnline = true;
// const isFriends = true;
// const isDnd = false;

// const canChat = isOnline && isFriends && !isDnd;

// console.log('can chat', canChat);

// -----------------Масиви------------------

// Функція getOrderQuantity(order) приймає один параметр
// order - масив рядків, які описують продукти в замовленні клієнта.
// Доповни код функції таким чином, щоб вона повертала число,
//     що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana']));
// console.log(getOrderQuantity(['apple', 'banana', 'pear']));
// console.log(getOrderQuantity([]));

// ------------------------------------------
// Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень.
//  Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// function getLastElementMeta(array) {
//   const indexFr = array.length - 1;
//   const indexFrLast = array[indexFr];
//   return [indexFr, indexFrLast];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

// console.log(getLastElementMeta(['apple', 'peach', 'pear']));

// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

// -----------скорочений розвязок---------------------
// function getLastElementMeta(array) {
//   return [array.length - 1, array[array.length - 1]];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));

// console.log(getLastElementMeta(['apple', 'peach', 'pear']));

// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

// --------------------------------------------------------

// Функція getExtremeElements(array) приймає один параметр array -
// масив елементів довільної довжини.
// Доповни код функції таким чином, щоб вона повертала масив з
//  двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const indexFr = array[0];
//   const indexFrZet = array.length - 1;
//   const indexFrLast = array[indexFrZet];
//   return [indexFr, indexFrLast];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// -----------------скорочений розвязок------------------------------------
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// ---------------перевірка прикладу---------------
// const array = [false];
// const result = array ? 'A' : 'B';
// console.log(result);
// ---відповідь А-------
// ----------------------------------------------------------------------------

// --------Приклад довжини масивів--- length.Це динамічна величина,
// яка автоматично змінюється під час додавання або видалення елементів.---------------
// const planets = ['Earth', 'Mars', 'Venus'];

// if (planets.length >= 3) {
//   console.log('3 or more elements');
// } else {
//   console.log('3 or less elements');
// }
// ----------------------------------------------------------------------------------

// Функція getLength(array) очікує один параметр array - масив довільних значень.
// Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
// і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//   const words = array.join('');
//   const simbol = words.length;
//   return simbol;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));

// -------------------Короткий запис----------------------------------

// function getLength(array) {
//   return array.join('').length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));

// -------------------------------------------------------------------
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування
// , залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає першим параметром рядок, що складається зі слів,
// розділених лише пробілами(параметр message) та другим параметром - число,
// що містить ціну гравірування за одне слово(параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   return words.length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

// -------------------------------------------------------------------------------

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// --------------------------------------------------------------------------------

// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив,
// що складається з усіх елементів масивів oldClients
//  і newClients.Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// ----------------------------------------------------------------------------------

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   } else {
//     return array.slice(0, index + 1);
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob'));
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey'));

// У цьому коді використовується метод indexOf(), який повертає індекс першого елемента масиву,
// який відповідає вказаному значенню.Якщо такий елемент не знайдено, метод повертає - 1.

// Якщо індекс елемента зі значенням value не дорівнює - 1, функція повертає підмасив,
//     що починається з початку array і до елемента зі значенням value включно, використовуючи метод slice().
// Якщо індекс елемента зі значенням value дорівнює - 1, функція повертає порожній масив.

// -------------------------------------------------------------------------------------------------

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   let str = [];
//   for (let i = min; i <= max; i += 1) {
//     str.push(i);
//   }
//   return str;

//   //   for (let i = min; i <= max; i += 1) {
//   //     i.push();
//   //   }
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// ----------------------приклад------------------------------------

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// --------------------------------------------------------------------
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
//  Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let summ = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     summ += order[i];
//   }
//   return summ;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ------------------------------------------------------------------------

// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end.
// Якщо жодного парного числа немає, то масив має бути пустим.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let masNambers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       masNambers.push(i);
//     }
//   }
//   return masNambers;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// ---------------------------------------------------------------------------
// Метод includes() можна поєднувати з розгалуженнями для перевірки умов.
//    Наприклад, виконати різний код залежно від наявності значення в масиві.

// const fruits = ['apple', 'banana', 'orange'];

// if (fruits.includes('hurma')) {
//   console.log('The array has an element banana');
// } else {
//   console.log('Array does not contain banana element');
// }
// ------------------------------------------------------------------------------
// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла,
// чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
// тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));
// -----------------------------------------------------------------------------------

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
//  Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
//  оскільки вони присутні в обох вхідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви(array1 та array2)
// довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
//
// function getCommonElements(array1, array2) {
//   const getCommonMassive = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       getCommonMassive.push(array1[i]);
//     }
//   }
//   return getCommonMassive;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// console.log(getCommonElements());

// -----------------------Цикл for ... of -----------------------------------------------------
// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }
// ----------------------------------------------------------------------------------------------
// Доповни код функції calculateTotalPrice(order) так,
//    щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let summTotal = 0;
//   for (const summ of order) {
//     summTotal = summTotal + summ;
//   }
//   return summTotal;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// console.log(calculateTotalPrice());
// ------------------------------------------------------------------------------------------------
// Функція createReversedArray() може приймати довільну кількість аргументів.
// Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.
//   Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].Використовуй цикл або метод масиву toReversed(),
//   який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray(...args) {
//   const reversedArray = [];
//   for (let i = args.length - 1; i >= 0; i--) {
//     reversedArray.push(args[i]);
//   }
//   return reversedArray;
// }

// console.log(createReversedArray(12, 85, 37, 4));
// console.log(createReversedArray(164, 48, 291));
// console.log(createReversedArray(412, 371, 94, 63, 176));
// console.log(createReversedArray());

// ---------------------------------------------------------------------------------------------------
// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   if (typeof amount !== 'number' || amount < 0) {
//     throw new Error('Сума повинна бути додатнім числом');
//   }
//   if (typeof taxRate !== 'number' || taxRate < 0 || taxRate > 1) {
//     throw new Error('Податкова ставка повинна бути числом між 0 і 1');
//   }
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(200, 0.1));
// console.log(calculateTax(100, 0.2));
// console.log(calculateTax(200, 0.2));
// console.log(calculateTax(100, 0.3));
// console.log(calculateTax(200, 0.3));
// console.log(calculateTax(100));
// console.log(calculateTax(200));
// ------------------------------------------------------------------------------------------------------
