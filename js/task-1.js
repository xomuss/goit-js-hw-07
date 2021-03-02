const categoriesListRef = document.querySelector('#categories');
const categoriesNumber = categoriesListRef.children.length;

console.log(`В списке ${categoriesNumber} категории.`);


const categoryItemRef = document.querySelectorAll('.item');

const test = categoryItemRef.forEach(el => 
   console.log(`категория: ${el.firstElementChild.textContent}, 
   количество элементов: ${el.lastElementChild.querySelectorAll('li').length}`)); 
