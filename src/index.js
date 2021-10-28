import _ from 'lodash';
import './style.css';

const list = [

    {
        description: "Buy vegetables",
        completed: false,
        index: 1,
    },

    {
        description: "Fill car with gas",
        completed: false,
        index: 2,
    }
];

list.sort((a, b) => (a.index - b.index));

const taskList = document.querySelector('#task-list');

list.forEach((item, i) => {

    const task = document.querySelector('#task-input');
    const addedTask = document.createElement('li');
    addedTask.setAttribute('class', 'task-row row');
    addedTask.innerHTML = `<input type="checkbox" class="tickbox"><p class="list-item">${list[i].description}<p>`;
    taskList.appendChild(addedTask);
    const OptionBtn = document.createElement('a');
    OptionBtn.setAttribute('href', '#');
    OptionBtn.innerHTML = '<p class="option-btn"></p>';
    addedTask.appendChild(OptionBtn);
    const dots = document.createElement('i');
    dots.className = 'fas fa-ellipsis-v dots';
    addedTask.appendChild(dots);

    
})

