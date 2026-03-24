//    =  - მინიჭების ოპერატორი
let number = 20;

// console.log(number)

//     ==   -  მნიშვნელობების შედარება
let age = 30;
let chosenAge = "30";

let text1 = "this is some text";
let text2 = "this is some text";

// console.log(text1 == text2)
// console.log(age == chosenAge);

//     ===  - მნიშვნელობებს და ტიპებს ადარებს
// console.log(text1 === text2)

// console.log(age === chosenAge);

// console.log(20 >= 10)
// console.log(30 % 11)
// console.log(20 % 8 === 0 )

// console.log('natia ' + 'itvet')

// console.log(20 + '1sgdjka')

// console.log('200' - 150)

// + --- string
// - / *   ---  number

let myAge = 12;

if (myAge >= 18 && myAge < 120) {
  console.log("მომხმარებელი არის სრულწლოვანი");
} else if (myAge > 0 && myAge < 18) {
  console.log("მომხმარებელი არის არასრულწლოვანი");
} else {
  console.log("შეყვანილი ასაკი არასწორია");
}

let score = 44;

/*
A - 90-100
B - 80-90
C - 70-80
D - 60-70
F - 50-60
FX - 0-50
*/

if (score <= 100 && score >= 90) {
  console.log("A");
} else if (score >= 80 && score < 90) {
  console.log("B");
} else if (score >= 70 && score < 80) {
  console.log("C");
} else if (score >= 60 && score < 70) {
  console.log("D");
} else if (score >= 50 && score < 60) {
  console.log("F");
} else if (score >= 0 && score < 50) {
  console.log("FX");
} else {
  console.log("მონაცემი არასწორია");
}

if (score > 100 && score < 0) {
  console.log("araswori qula");
} else if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else if (score >= 50) {
  console.log("F");
} else {
  console.log("FX");
}
