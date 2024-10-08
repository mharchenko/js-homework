// Висновок
// Об’єкти – це асоціативні масиви з рядом додаткових можливостей.
// Вони зберігають властивості (пари ключ-значення), де:
// Ключі властивостей повинні бути рядками або символами (зазвичай рядками).
// Значення можуть бути будь-якого типу.
// Щоб отримати доступ до властивості, ми можемо використовувати:
// Запис через крапку: obj.property.
// Квадратні дужки obj["property"]. Квадратні дужки дозволяють взяти ключ зі змінної, наприклад, obj[varWithKey].
// Додаткові оператори:
// Видалення властивості: delete obj.prop.
// Перевірка існування властивості: "key" in obj.
// Перебір властивостей об’єкта: цикл for (let key in obj).
// Те, що ми вивчали в цьому розділі, називається “простим об’єктом” або просто Object.
// В JavaScript є багато інших типів об’єктів:
// Array для зберігання впорядкованих колекцій даних,
// Date для зберігання інформації про дату і час,
// Error для зберігання інформації про помилку.
// … і так далі.
// У них є свої особливості, які ми вивчимо пізніше.
// Іноді люди говорять щось на кшталт “тип даних Array” або “тип даних Date”,
// але формально вони не є окремими типами, а належать до типу даних "Object".Вони лише розширюють його різними способами.
// Об’єкти в JavaScript дуже потужні.Тут ми тільки трохи заглибилися в дійсно величезну тему.
// Ми будемо тісно працювати з об’єктами та дізнаємося про них більше в наступних частинах посібника.
// ------------------------------------------------------------------------------------
// Привіт, object
// важливість: 5
// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.
// let user = {};
// user.name = 'Іван';
// user.surname = 'Сміт';
// user.name = 'Петро';
// delete user.name.
// ----------------------------------------------------------------------------------------------
// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.
// Має так працювати:

// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule['8:30'] = 'Вставай';
// alert(isEmpty(schedule)); // false

// function isEmpty(obj) {
//   for (const key in obj) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(name));
// ---------------------------------------------------------------------------------------------------
// Сума властивостей об’єкта
// важливість: 5
// У нас є об’єкт для зберігання заробітної плати нашої команди:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.
// Якщо об’єкт salaries порожній, то результат має бути 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let summ = 0;
// for (const salary in salaries) {
//   summ += salaries[salary];
//   if (salaries === 0) {
//     summ = 0;
//   }
// }

// console.log(summ);
// ----------------------------------------------------------------------------
// Помножте числові значення властивостей на 2
// важливість: 3
// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
// Наприклад:
// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };
// multiplyNumeric(menu);
// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню"
// };
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.
// P.S. Використовуйте typeof для перевірки, що значення властивості числове.
// Відкрити пісочницю з тестами.
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'Моє меню',
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === 'Number') {
//       obj[key] *= 2;
//     }
//   }
// }
// -----------------------------this--------------------------------------------------------------------
// Підсумки
// Функції, які зберігаються у властивостях об’єкта, називаються “методами”.
// Методи дозволяють об’єктам “діяти” подібно до object.doSomething().
// Методи можуть посилатися на об’єкт завдяки this.
// Значення this визначається під час виконання.
// Коли функція оголошена, вона може використовувати this, але саме this не має значення, доки функція не буде викликана.
// Функцію можна копіювати між об’єктами.
// Коли функція викликається в синтаксисі “методу”: object.method(), значення this під час виклику є object – об’єкт перед крапкою.
// Зверніть увагу, що стрілкові функції є особливими: у них немає this.Коли всередині стрілкової функції звертаються до this,
// то його значення береться ззовні.
// --------------------------------------------------------------------------------------------------
// Створіть калькулятор
// важливість: 5
// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.
//

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// // ----------------------------------------------------------------------
// Ланцюг викликів
// важливість: 2
// Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показує поточний крок
//     alert( this.step );
//   }
// };
// Тепер, якщо нам потрібно зробити кілька викликів послідовно, можна зробити це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Такий підхід широко використовується в бібліотеках JavaScript.

// Відкрити пісочницю з тестами.

// рішення
// Рішення полягає у поверненні самого об’єкта з кожного виклику функції.

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep(); // покаже 1, потім 0
// -------------------------------------------------------------------------------
// Створити Калькулятор за допомогою конструктора
// важливість: 5
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

// read() запитує два значення за допомогою prompt і записує їх у властивості об’єкта з іменами a та b.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
// Наприклад:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());
// ----------------------------------------------------------------
// Створити Accumulator
// важливість: 5
// Створіть функцію-конструктор Accumulator(startingValue).

// Об’єкт, який він створює повинен:

// Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
// Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
// Іншими словами, властивість value – це сума всіх введених користувачем значень разом із початковим значенням startingValue.

// Нижче ви можете подивитись демонстрацію роботи коду:

// let accumulator = new Accumulator(1); // початкове значення 1

// accumulator.read(); // додає введене користувачем значення
// accumulator.read(); // додає введене користувачем значення

// alert(accumulator.value); // показує суму цих значень

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value += +prompt('Скільки додати?', 0);
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);
// -----------------------------------------------------------------------------------
// Підсумки
// Синтаксис опціонального ланцюжка ?. має три форми:

// obj?.prop – повертає obj.prop, якщо існує obj, і undefined в іншому випадку.
// obj?.[prop] – повертає obj[prop], якщо існує obj, і undefined в іншому випадку.
// obj.method?.() – викликає obj.method(), якщо існує obj.method, в іншому випадку повертає undefined.
// Як бачимо, всі вони прості та зрозумілі в використанні. ?.перевіряє ліву частину на рівність
// null / undefined і дозволяє продовжувати обчислення якщо це не так.

// Ланцюжок ?. дозволяє без виникнення помилок звертатись до вкладених властивостей.

//     Однак, потрібно розумно застосовувати?., тільки в тих випадках де допустимо що ліва частина не існує.
//  Щоб таким чином не приховувати потенційні помилки програмування.
// -----------------------------------------------------------------------------
// Підсумки
// Щоб записати числа з багатьма нулями:

// Додайте "e" з числом нулів до числа. Як і: 123e6 те саме, що 123 з 6 нулями 123000000.
// Від’ємне число після "е" призводить до ділення числа на 1 із заданими нулями. Наприклад 123e-6 означає 0.000123 (123 мільйони).
// Для різних систем числення:

// Можна записувати числа безпосередньо в шістнадцятковій (0x), вісімковій (0o) та двійковій (0b) системах.
// parseInt(str, base) розбирає рядок str на ціле число чисельної системи із заданим base, 2 ≤ base ≤ 36.
// num.toString(base) перетворює число в рядок в системі числення за допомогою заданої base.
// Для регулярних тестів чисел:

// isNaN(value) перетворює свій аргумент на число, а потім перевіряє його на NaN
// Number.isNaN(value) перевіряє, чи належить його аргумент до типу number, і якщо так, перевіряє його на NaN
// isFinite(value) перетворює свій аргумент на число, а потім перевіряє, чи не є NaN/Infinity/-Infinity
// Number.isFinite(value) перевіряє, чи належить його аргумент до типу number, і якщо так, перевіряє, чи не є NaN/Infinity/-Infinity
// Для перетворення значень на зразок 12pt та 100px у число:

// Використовуйте parseInt/parseFloat для “не суворого” перетворення, яке зчитує число з рядка, а потім повертає значення, яке вдалося прочитати перед помилкою.
// Для дробів:

// Округлюйте за допомогою Math.floor, Math.ceil, Math.trunc, Math.round або num.toFixed(precision).
// Пам’ятайте, що при роботі з дробами втрачається точність.
// Більше математичних функцій:

// Дивіться об’єкт Math, коли вони вам потрібні. Бібліотека дуже мала, але охоплює основні потреби.
// --------------------------------------------------------------------------------
// Сума чисел від відвідувача
// важливість: 5
// Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.

// Запустити демонстрацію

// P.S. Тут є цікавий момент з типами + перед промт переводить відразу в число
// const summ1 = +prompt('Введіть число a?', '');
// const summ2 = +prompt('Введіть число b?', '');
// alert(summ1 + summ2);
// ------------------------------------------------------------------------------------
// Повторюйте, поки вхід не буде числом
// важливість: 5
// Створіть функцію readNumber, яка запросить число, поки відвідувач не введе дійсне числове значення.

// Отримане значення потрібно повернути як число.

// Відвідувач також може зупинити процес, ввівши порожній рядок або натиснувши “CANCEL”.
//  У цьому випадку функція повинна повернути null

// function readNumber() {
//   let num;
//   do {
//     num = prompt('Введіть число', 0);
//   } while (!isFinite(num));
//   if (num === null || num === '') return null;
//   return +num;
// }
// alert(`Read: ${readNumber()}`);
// --------------------------------------------------------------------------------------
// Випадкове число від min до max
// важливість: 2
// Вбудована функція Math.random() створює випадкове значення від 0 до1 (не враховуючи 1).

// Напишіть функцію random(min, max) для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).

// Приклади його роботи:

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));

// alert(random(1, 5)); // 1.2345623452
// alert(random(1, 5)); // 3.7894332423
// alert(random(1, 5)); // 4.3435234525
// -----------------------------------------------------------------------------------------
// Довільне ціле число від min до max
// важливість: 2
// Створіть функцію randomInteger(min, max), яка генерує випадкове ціле число від min до max включно.

// Будь-яке число з інтервалу min..max повинно з’являтися з однаковою ймовірністю.

// Приклади його роботи:

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max - min);
//   return Math.round(rand);
// }

// alert(randomInteger(1, 3));

// alert(randomInteger(1, 5)); // 1
// alert(randomInteger(1, 5)); // 3
// alert(randomInteger(1, 5)); // 5
// ---------------------------------------------------------------------------------------
