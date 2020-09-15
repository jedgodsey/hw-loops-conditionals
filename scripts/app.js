// ## Easy Going
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// ## Get Even

// for (let i = 2; i <= 200; i+=2) {
//     console.log(i);
// }

// ## Excited Kitten

// for (let i = 1; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!");
//     let catResponse = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
//     if (i % 2 === 0) {
//         console.log(catResponse[Math.floor(Math.random() * 3)]);
//     }
// }

// ## Fizz Buzz 

// for (let i = 1; i <= 100; i++) {
//     i % 3 === 0 ? (i % 5 === 0 ? console.log('FizzBuzz') : console.log('Fizz')) : i % 5 === 0 ? console.log('Buzz') : console.log(i);
// }

// ## Getting to Know You

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the `kenny` array and replace it with "Gameboy".
kenny[0] = 'Gambeboy';
// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] += 1;
// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[2] = 'Gotham City';
// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.splice(reuben.indexOf('Durham'), 1, 'Chicago');
console.log(reuben);
// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
jimHaff.splice(2,1,'San Jose', 'Oakland', 'Santa Rosa');
// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)
jimHaff.splice(2,1);

// ## Yell at the Ninja Turtles

// {
//     let turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
// for (let i = 0; i < turtles.length; i++) {
//     turtles[i] = turtles[i].toUpperCase();
// }
// console.log(turtles);

// for (let i = 0; i < turtles.length; i++) {
//     turtles[i] = turtles[i].split('');
//     for (let j = 0; j < turtles[i].length; j+=2) {
//         turtles[i][j] = turtles[i][j].toLowerCase();
//     }
//     turtles[i] = turtles[i].join('');
// }
// console.log(turtles);
// }

// ## Return of the Closets

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];


// // ### Alien Attire

// let kristynsShoe = kristynsCloset[0];
// thomsCloset[2].push(kristynsShoe);
// // ### Dress 'em Up

// for (let i = 1; i <= 3; i++) {
//     let randomK = Math.floor(Math.random() * 4);
//     console.log(`For day ${i}, Kristyn will have her ${kristynsCloset[randomK]}, ${kristynsCloset[randomK + 1]} and ${kristynsCloset[randomK + 2]}.  Thom will have his ${thomsCloset[0][i - 1]}, ${thomsCloset[1][i -1]} and ${thomsCloset[2][i -1]}.`);
// }

// ### Dirty Laundry

// for (let i = 0; i < kristynsCloset.length; i++) {
//     console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
// }

// ### Inventory

// for (let i = 0; i < thomsCloset.length; i++) {
//     console.log(thomsCloset[i]);
// }

// ## Multiples of 3 and 5

// let mySum = 0;
// for (let i = 1; i < 1000; i++) {
//     if (i % 15 === 0) {
//         mySum += i;
//     } else if (i % 3 === 0) {
//         mySum += i;
//     } else if (i % 5 === 0) {
//         mySum += i;
//     }
// }
// console.log(mySum);

// # Hungry for more?

// ## Triangles

// 0. declare a variable `argument` and set it equal to 7.
// let argument = 8;

// let hashes = '';
// for (let i = 1; i <= argument; i++) {
//         hashes = hashes + '#';
//     console.log(hashes);
// }

// let grids = '';
// let spaces = ''
// for (let i = 1; i <= argument; i++) {
//     spaces = spaces + ' ';
// }
// spaces = spaces.split('');
// for (let i = 1; i <= argument; i++) {
//     spaces.pop();
//     closeSpaces = spaces.join('');
//     grids = grids + '#';
//     console.log(closeSpaces + grids);
// }


// let pounds = '';
// for (let i = 1; i <= argument; i++) {
//     pounds = pounds + '#';
// }
// pounds = pounds.split('');
// for (let i = 1; i <= argument; i++) {
//     closePounds = pounds.join('');
//     pounds.pop();
//     console.log(closePounds);
// }


// let ticTacs = '';
// let gaps = '';
// for (let i = 1; i <= argument; i++) {
//     ticTacs = ticTacs + '#';
// }
// ticTacs = ticTacs.split('');
// for (let i = 1; i <= argument; i++) {
//     closeTicTacs = ticTacs.join('');
//     ticTacs.pop();
//     console.log(gaps + closeTicTacs);
//     gaps = gaps + ' ';
// }

// ## Find the Median

// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];

// let goodNums = nums.sort((a,b) => a-b);
// let myMedian = 0;
// if (goodNums.length % 2 === 0) {
//     myMedian = (goodNums[Math.floor(goodNums.length / 2)] + goodNums[Math.floor((goodNums.length - 1) / 2)]) /2;
// } else {
//     myMedian = goodNums[Math.floor(goodNums.length / 2)];
// }
// console.log(myMedian);
