// // --------Spam check----------//
// function checkForSpam(message) {
//   let spamWords = ['spam', 'sale'];
//   let messageLowercase = message.toLowerCase();

//   for (let word of spamWords) {
//     if (messageLowercase.includes(word)) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(150, 0));

// const age = 17;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// const a = 11;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }

// console.log(password === 1231546);

// const screenWidth = 300;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log('Mobile screen');
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log('Tablet screen');
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log('Desktop screen');
// } else {
//   console.log('Godzilla screen');
// }

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('Hello world', 3));

// console.log(getSubstring('Hello world', 5));

// console.log(getSubstring('Hello world', 8));

// console.log(getSubstring('Hello world', 11));

// console.log(getSubstring('Hello world', 0));

// const message = 'Please buy our stuff!';
// const hasSpam = message.includes('our');

// if (hasSpam) {
//   console.log('Warning: This message contains forbidden words.');
// } else {
//   console.log('You can safely open this message.');
// }
