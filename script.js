let phrases = [
  "This house is beautiful",
  "Remember who you are",
  "Money costs too much",
  "Life is beautiful, enjoy",
  "Let your fears go",
];
let dropField = document.getElementById("word");

function random(phrases) {
  let randomWords = [];
  let n;
  for (let i = 0; i < 4; i++) {
    n = Math.floor(Math.random() * phrases.length);
    randomWords.push(phrases[n]);
  }
  return randomWords;
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.innerHTML);
}

function drop(event) {
  event.preventDefault();

  let data = event.dataTransfer.getData("text");
  dropField.innerHTML += `${data} `;
}

function check(event) {
  let str = dropField.innerHTML.trim();
  for (let i = 0; i < phrases.length; i++) {
    if (str == phrases[i]) {
      alert("Correct!");
      break;
    } else {
      alert("Error!");
      break;
    }
  }
}

let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);
