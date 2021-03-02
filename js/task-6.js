const inputRef = document.querySelector('#validation-input')

console.log(inputRef.id);

inputRef.addEventListener('blur', count)

function count(event) {
  console.log(event.currentTarget.value.length === Number(inputRef.dataset.length));
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
  } else {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid')
  }
}