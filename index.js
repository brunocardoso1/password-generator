const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "@",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function generatePassword() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i <= 10; i++) {
    random1 = Math.floor(Math.random() * 62);
    random2 = Math.floor(Math.random() * 62);
    password1 += characters[random1];
    password2 += characters[random2];
  }
  passwordOne.textContent = password1;
  passwordTwo.textContent = password2;
}
