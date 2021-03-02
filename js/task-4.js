const buttonRef = document.querySelectorAll('#counter button')
const valueRef = document.querySelector('#value')

buttonRef[0].addEventListener('click', decrement)
buttonRef[1].addEventListener('click', increment)

let counterValue = 0;

function increment(event) {
   counterValue += 1
   valueRef.textContent = counterValue
};

function decrement(event) {
  counterValue -= 1
  valueRef.textContent = counterValue
}; 

