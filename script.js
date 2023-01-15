let phrase = "This house is beautiful";
let dropField = document.getElementById("word");

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
  alert(str == phrase ? "Correct!" : "Error!");
}

let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);
