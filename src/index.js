import _ from 'lodash';
import './style.css';



function component() {


  const li = document.createElement('li');
  const todo = document.getElementById('task-input').value

  li.innerHTML = `<li><input type="checkbox"/> - ${todo}</li>`;

  return li;
}

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  document.querySelector('#list-container').appendChild(component());
});