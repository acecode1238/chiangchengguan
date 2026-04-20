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