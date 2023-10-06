console.log("sukaaaaaaaaaaaaaaaaaaaaaaa");
import './style.css';

const content = document.getElementById('content');
const container = document.createElement('div');
container.classList.add('container');
content.appendChild(container);

const app = document.createElement('div');
app.classList.add('todo-list');
container.appendChild(app);
const H = document.createElement('h2');
H.textContent = "To-Do List";
app.appendChild(H);

const icon = document.createElement("i");
icon.classList.add("fa-solid", "fa-bars");
H.appendChild(icon);

const row = document.createElement('form');
row.classList.add('row');
app.appendChild(row);
row.addEventListener("submit", (e) => {
    e.preventDefault()
});

const input = document.createElement('input')
input.type = 'text';
input.id = "input-box";
input.placeholder = "Add your text";
row.appendChild(input);
const button = document.createElement('button');
button.textContent = "Add";
button.type = 'submit';
row.appendChild(button);

const list = document.createElement('ul');
list.id = "list-container";
app.appendChild(list);


button.addEventListener('click', () => {
    console.log(input.value);
    if (input.value == ' ') {
        alert("You must write a task");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);
