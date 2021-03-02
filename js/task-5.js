const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output')

inputRef.addEventListener('input', nameBuilder)

function nameBuilder(event) {
  console.log(event.currentTarget.value);
  event.currentTarget.value === ''
    ? nameOutputRef.textContent = 'незнакомец'
    : nameOutputRef.textContent = event.currentTarget.value
}
