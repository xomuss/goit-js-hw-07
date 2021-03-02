const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients')

const makeList = data => {
  return data.map(el => {
    const listRef = document.createElement('li');
    listRef.textContent = el;
  
    return listRef
  })
}

const elements = makeList(ingredients)
ingredientsListRef.append(...elements)