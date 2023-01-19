let phrases = [
  "This house is beautiful",
  "Remember who you are",
  "Money costs too much",
  "Life is beautiful, enjoy",
  "Let your fears go",
];
let phrase = phrases[Math.floor(Math.random() * phrases.length)];
let words = phrase.split(" ");

gen(random(words));

let dropField = document.getElementById("word");

function random(arr) {
  let randomWords = [];
  let n;

  for (let i = 0; randomWords.length < arr.length; i++) {
    n = Math.floor(Math.random() * arr.length);
    let exist = false;
    for (let j = 0; j < randomWords.length; j++) {
      if (arr[n] == randomWords[j]) {
        exist = true;
      }
    }
    if (!exist) {
      randomWords.push(arr[n]);
    }
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
  let str = dropField.innerText.trim();
  console.log(str);
  alert(str == phrase ? "Correct!" : "Error!");
}

function gen(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(
      // '<img id="' + arr[i] + '" src="images/' + arr[i] + '.png" class="words">'
      `<div id="drag${
        i + 1
      }" class="card" draggable="true" ondragstart="drag(event)">${
        arr[i]
      }</div>`
    );
  }
}

// Get the 'speak' button
let button = document.getElementById("speak");

// Get the text input element.
// let speechMsgInput = document.getElementById("speech-msg");
let speechMsgInput = document.getElementById("word");

// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
  let msg = new SpeechSynthesisUtterance();

  // Set the text.
  msg.text = text;

  // Set the attributes.
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;

  // Set the voice "Google UK English Female"
  let selectedVoice = "Google UK English Female";
  let voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedVoice) {
      msg.voice = voices[i];
      break;
    }
  }

  // Queue this utterance.
  window.speechSynthesis.speak(msg);
}

// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener("click", function (e) {
  // if (speechMsgInput.value.length > 0) {
  //   speak(speechMsgInput.value);
  // }
  if (speechMsgInput.innerText.length > 0) {
    speak(speechMsgInput.innerText);
  }
});

let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);
