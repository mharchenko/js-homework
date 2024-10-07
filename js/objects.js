// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined
// -------------------------------------------------------------------------
// Об'єкт apartment описує квартиру і має 5 властивостей:
//  шлях до зображення, опис, рейтинг, ціна, теги.Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// -----------------------------------------------------------------------------------
// Доступ до вкладених властивостей
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swimming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// ----------Значення властивості — це масив.---------------------------

// Якщо значення властивості — це масив,
//     то в нашому прикладі вище звернення до цього масиву буде: **** user.hobbies

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// // Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// // Також можна використовувати властивості й методи масиву,
// //  наприклад отримати значення його довжини з властивості length: user.hobbies.length;

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// ----------------------Доступ до властивостей через квадратні дужки--------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book['title']); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book['genres']); // ["historical prose", "adventure"]

// const propKey = 'author';
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// ----------------------Зміна значення властивостей------------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push('drama');

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]
// ----------------------------------------------------------------------------------------+
// ----------------------------Додавання властивостей-----------------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]

// --------------------Перебір об"єкта--------------------------------------------------
// ----------------------цикл for in-------------------------------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// --------------------------------------------------------------------------------------

// Перебери об'єкт apartment, використовуючи цикл for...in,
// і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys); // Output: ["descr", "rating", "price"]
// console.log(values); // Output: ["Spacious apartment in the city center", 4, 2153]

// -----------------------------Метод Object.keys() повертає ключі-----------------------------------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// --------------------------------------------------------------------------------------------------------------
// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) console.log(key); // Ключ
// console.log(book[key]); // Значення властивості
// -----------------------------------------------------------------------------------------------------------------
// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//  Запиши у змінну keys масив ключів властивостей об'єкта apartment,
//   і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = [];

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys); // виводить масив ключів
// console.log(values); // виводить масив значень

// -------------------------------------------------------------------------------------------------------------
// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in
//   на метод Object.keys() для отримання масиву властивостей.
//   Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

// function countProps(object) {
//   return Object.keys(object).length;
// }

// Пояснення:

// Object.keys(object)повертає масив власних імен перерахованих властивостей обєкта.
// Властивість lengthмасиву повертає кількість елементів у масиві, яка є кількістю властивостей обєкта.

// -------------------------Метод Object.values() повертає властивості----------------------------------------------
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
// -----------------------------------------------------------------------------------------------------------------

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const summSalaries = Object.values(salaries);
  for (const summ of summSalaries) {
    totalSalary += summ;
  }
  return totalSalary;
}

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const salariesArray = Object.values(salaries);

//   for (const salary of salariesArray) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// ------------------------Масив об’єктів-----------------------------------------------------
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
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
// ---------------------------------------------------------------------------------
// Масив colors містить колекцію кольорів.Кожен колір представлений об'єктом і має властивості
//  hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of.
//  Додай у масив hexColors значення властивостей hex, а в масив rgbColors
//   - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
// -------------------------Пошук об'єкта за значенням властивості---------------------------
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }
// ---------------------------------------------------------------------------------------

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
// Функція містить масив об'єктів products з такими властивостями,
//  як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям
//   (властивість name) в масиві products і повертала його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

// Ініціалізуємо змінну для зберігання знайденого продукту
//   let product = null;

// Використовуємо цикл for для пошуку об'єкта продукту з певним ім'ям
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === productName) {
//       product = products[i];
//       break;
//     }
//   }

// Якщо продукт знайдений, повертаємо його ціну, інакше повертаємо null
//   return product ? product.price : null;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));
// --------------------------------------------------------------------------------------------
// -------------------------------Колекція значень властивості------------------------------------
// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8.2 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 9 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 6.8,
//   },
// ];

// const titles = [];

// for (const book of books) {
//   titles.push(book.title);
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]
// ---------------------------------------------------------------------------------------------------
// Дізнаємося середній рейтинг усієї нашої колекції.
//  Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8
// --------------------------------------------------------------------------------------------------
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//  Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const result = [];
//   for (const product of products) {
//     if (propName in product) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// -------------------------з лічильником--------------------------------------------------------
// const result = [];
// for (let i = 0; i < products.length; i++) {
//   if (propName in products[i]) {
//     result.push(products[i][propName]);
//   }
// }
// return result;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));
// ----------------------------------------------------------------------------------------------------
// Функція calculateTotalPrice(productName) приймає один параметр productName - назва товару.
//  Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!",
//   де < productName > — це ім'я товару.

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === productName) {
//       total = products[i].price * products[i].quantity;
//       return total;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

// ----------------------------------Методи обєкта---------------------------------------
// Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними.
// Якщо значення властивості — це функція, така властивість називається методом об'єкта.

// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».
// Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.
//  Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     return 'Returning all books';
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// bookShelf.addBook('New book 1'); // поверне "Adding book New book 1"
// bookShelf.addBook('New book 2'); // поверне "Adding book New book 2"
// -----------------------------------------------------------------------------------------------------

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю.
// Програма має додавати, видаляти, шукати та оновлювати зілля.
// Оголоси об'єкт atTheOldToad з наступними властивостями:
// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// // Значення властивості addPotion - це метод об'єкта
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));
// -----------------------------------------------------------------------------------------
// -----------------Доступ до властивостей об'єкта-----------------------------------------
// Методи використовуються для роботи з властивостями об'єкта та їх змінних.
// Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.
// Ключове слово this — це контекст виконання функції.
// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.
// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
// ------------------------------------------------------------------------
//   Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return  this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());
// ------------------------------Зміна за посиланням---------------------------------------------------------
// У властивості books об'єкта bookShelf зберігається масив.
// Отже, ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив.
// const bookShelf = {
//   books: ["The Last Kingdom"],
// };

// bookShelf.books.push("The Mist");
// console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

// У прикладі нижче в ключовому слові this зберігається посилання на об'єкт, що викликав відповідний метод.
// Під час звернення до this.books усередині методу, ми посилаємось на масив, що зберігається у властивості books.
//  Це означає, що його можна змінювати за посиланням, наприклад, використавши метод масиву push() для додавання нового елемента.
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
// ---------------------------------------------------------------------------------------------------------------------------
// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {this.potions.push(potionName);},
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

// ------------------------Масив об’єктів---------------------------------------------------------------
// и вже знаєш, що об'єкт дає змогу згрупувати характеристики сутності, наприклад, книги.
// Тому найчастіше будемо працювати з масивом об'єктів. Для цього зберігатимемо у властивості books не рядки,
//  а об'єкти з назвою книги та рейтингом, а в майбутньому, можливо, й іншими характеристиками.
// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
// 	getBooks() {
// 		return this.books;
// 	}
// };
// Тепер метод getBooks повертатиме масив об'єктів.
//  А метод addBook очікує в параметрі не рядок, а об'єкт книги і додає його в масив у властивості books.
//   const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

//   При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів.
// Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг книг. Для цього:
// Оголосимо новий метод getAvarageRating в об'єкті.
// Оголосимо змінну totalRating для зберігання загального рейтингу.
// Переберемо масив книг за посиланням this.books у циклі for...of.
// На кожній ітерації додамо до загального рейтингу - рейтинг книги.
// Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

// -----------------------------------------------------------------------------------------------
//   Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
//   Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.
// Об'єкт atTheOldToad має наступні властивості:
// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
// ----------------------------------for of-----------------------------------------------------
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };
// ----------------------------------Цикл for-------------------------------------------------
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let i = 0; i < this.potions.length; i++) {
//       totalPrice += this.potions[i].price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.getTotalPrice());

// ------------------------------Зміна об'єкта в масиві---------------------------------------------------------

// Ціла група завдань зводиться до зміни значення властивості певного об'єкта в масиві.
// Наприклад, зміна рейтингу книги.Пошук необхідного об'єкта в масиві виконується за унікальним значенням властивості,
// наприклад, за ім'ям книги.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 	}
// };

// Метод changeRating очікує на назву книги, якій необхідно змінити рейтинг,
//   і нове значення рейтингу, яке потрібно підмінити в об'єкті.
//   Процес зміни властивостей об’єкта в масиві починається з таких кроків:

// Перебір масиву об'єктів у циклі, наприклад for...of.
// Додавання перевірки збігу значення властивості об'єкта на поточній ітерації і заданого значення.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				// Знайшли необхідний об’єкт за назвою книги
// 			}
// 		}
// 	}
// };

// При виконанні if ми можемо бути впевнені, що на даній ітерації в змінній book
// знаходиться посилання на необхідний нам об'єкт, оскільки об'єкти передаються за посиланнями.
// Тепер достатньо звернутися до властивості цього об'єкта і прирівняти йому нове значення.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };

// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);

// Після виклику методу changeRating властивість rating об'єкта з назвою,
// що збігається з bookName, буде оновлено на newRating.
// ------------------------------------------------------------------------------------

// Об'єкт atTheOldToad має наступні властивості:
// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         break;
//       }
//     }
//   },
// };
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));
// console.log(atTheOldToad.updatePotionName('Speed potion', 'Polymorth'));

// -----------------------------Синтаксис spread і rest Залишкові параметри-------------------------------------------------------
// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
// щоб вона приймала будь - яку кількість аргументів у параметр args і повертала їхню суму.

// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// --------------------------------------Збір частини аргументів----------------------------------------------------------------------
// Операція(...rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна.
// Для цього потрібно оголосити параметри до «збирання». Можна покласти перші кілька параметрів у змінні, а решту — зібрати в масив.

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// Усі аргументи, для яких будуть оголошені параметри, передадуть їм свої значення,
// інші аргументи міститимуться в масиві.

// У параметр first буде поміщено перший аргумент
// У параметр second буде поміщено другий аргумент
// У параметр args буде поміщено масив з інших аргументів

// Операція rest збирає решту всіх аргументів, а тому повинна завжди бути останньою в підписі функції,
//   інакше виникне помилка SyntaxError: Rest parameter must be last formal parameter.

// Це викличе помилку:

// function multiply(first, ...args, second) {
// }
// Це також викличе помилку:

// function multiply(...args, first, second) {
// }
// --------------------------------------------------------------------------------------
// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів,
// які більші за задане число.Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число, а решта аргументів повинні
// бути зібрані за допомогою синтаксису(...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] > value) {
//       sum += args[i];
//     }
//   }
//   return sum;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// ------------------------------Входження параметрів--------------------------------------------
// Ти вже знаєш, як отримати масив зі списку аргументів.
// Інколи потрібно зробити протилежне — передати масив поелементно у функцію, яка викликається.
//   Наприклад, є вбудована функція Math.max(), яка шукає та повертає найбільший з аргументів(чисел),
//     тобто очікує не масив значень, а довільну кількість аргументів.

// Math.max(14, -4, 25, 8, 11);
// Уяви, що є масив температур у вигляді чисел [14, -4, 25, 8, 11].
// Як викликати для нього Math.max? Адже він очікує отримати список чисел, а не один масив.

// const temps = [14, -4, 25, 8, 11];
// console.log(temps); // [14, -4, 25, 8, 11]

// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// Тут доцільно використати оператор розпилення ...spread.
// Він схожий на залишкові параметри — теж використовує ..., але робить абсолютно протилежне.
//  Коли функціонал ...spread використовується при виклику функції, він перетворює масив на список аргументів.

// const temps = [14, -4, 25, 8, 11];
// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25
// --------------------------------------------------------------------------
// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min()

// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// --------------------------------Створення масиву-----------------------------------------------

// Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий.
//  Досі для цього використовувалися методи slice() і concat(), але операція розпилення дозволяє зробити те саме в коротшій формі.

// Розгляньмо приклад нижче, де створена копія масиву.

// const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// Уяви, що temps — це ящик яблук, і ми хочемо створити його точну копію.
// Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps — розподіляємо його в іншу колекцію.
// За такої умови ящик temps не зміниться, у ньому все ще будуть яблука, а в новому ящику — їх точні копії.

// У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.

// Оригінальні ящики(масиви) не зміняться, а в новому будуть копії усіх їх яблук(елементів).
// Порядок розподілу важливий — він впливає на порядок елементів у новій колекції.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
// --------------------------------------------------------------------

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// ------------------------------Створення об'єкта--------------------------------------------

// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення.Імена властивостей об'єкта — унікальні, тому властивості об'єкта,
//   що розпиляються, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// Якби яблука в ящику мали наліпки з позначками, то в одному ящику не могло б бути двох яблук з однаковими позначками.
//   Тому, пересипаючи другий ящик, усі яблука, позначки яких будуть збігатися з тими, що вже знаходяться в новому ящику, замінять існуючі.

// Під час розпилення можна додавати властивості в довільне місце.
// Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
// -----------------------------------------------------------------------
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
//   які зберігаються у змінній defaultSettings.Під час створення тесту,
//     усі або частину налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням
//  і поверх них застосувати перевизначені користувацькі налаштування.Доповни код таким чином,
//   щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується синтаксис ...

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// --------------------------------------------------------------------------
