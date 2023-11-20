const button = document.querySelector('.trybewarts-login');

button.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

agreement.addEventListener('click', () => {
  submit.toggleAttribute('disabled');
});

const counter = document.querySelector('#counter');
const text = document.querySelector('#text');

counter.innerHTML = 500;
text.addEventListener('input', () => {
  counter.innerHTML = 500 - text.value.length;
});

const main = document.querySelector('main');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const select = document.querySelector('#house');
const formInputs = document.querySelector('#evaluation-form');
const checkboxes = document.querySelectorAll('.subject');
const logo = document.querySelector('#trybewarts-forms-logo');

const checkedBox = () => {
  const selectBox = [];
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      selectBox.push(checkboxes[i].value);
    }
  }
  return selectBox.join(', ');
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.createElement('form');
  main.appendChild(form);
  form.id = 'form-data';
  main.insertBefore(form, logo);
  for (let i = 0; i < 7; i += 1) {
    const p = document.createElement('p');
    form.appendChild(p);
  }
  form.childNodes[0].textContent = `Nome: ${inputName.value} ${inputLastName.value}`;
  form.childNodes[1].textContent = `Email: ${inputEmail.value}`;
  form.childNodes[2].textContent = `Casa: ${select.options[select.selectedIndex].value}`;
  form.childNodes[3].textContent = `Família: ${formInputs.family.value}`;
  form.childNodes[4].textContent = `Matérias: ${checkedBox()}`;
  form.childNodes[5].textContent = `Avaliação: ${formInputs.rate.value}`;
  form.childNodes[6].textContent = `Observações: ${text.value}`;
  formInputs.style.display = 'none';
});
