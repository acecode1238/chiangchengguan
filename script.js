const text = document.querySelector('.typewriter')
const content = text.textContent;

text.textContent = '';

let index = 0;

function type() {
    if (index < content.length){
        text.textContent += content[index];
        index++
        setTimeout(type, 60);
    }
}

type()

const terminal = document.getElementById("terminal");
const button = document.getElementById('toggle');

const lines = [
  "$ cd ChengGuan",
  "$ ./whoami",
  "",
  "Hello World",
  "My favourite countries are germany and taiwan",
  "welcome to the never ending land of magic",
  "Scroll to discover more"
];

let lineIndex = 0;
let charIndex = 0;
let timeoutId;

function typeTerminal() {
  if (lineIndex >= lines.length) return;

  const line = lines[lineIndex];

  if (charIndex < line.length) {
    terminal.textContent += line[charIndex];
    charIndex++;
    timeoutId = setTimeout(typeTerminal, 40);
  } else {
    terminal.textContent += "\n";
    lineIndex++;
    charIndex = 0;
    timeoutId = setTimeout(typeTerminal, 300);
  }
}

button.addEventListener("click", function() {
  clearTimeout(timeoutId);
  terminal.textContent = "";
  lineIndex = 0;
  charIndex = 0;
  typeTerminal();
});