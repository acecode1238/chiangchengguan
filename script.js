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

const response = document.querySelector('.send');

response.addEventListener('click', function(){
     window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=chiangchengguan@gmail.com",
        "_blank"
    );
})
