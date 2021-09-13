const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
  
const newIngredients = document.querySelector('#ingredients');

const addIngredient = (array) => array.map(element => {
  const itemList = document.createElement('li')
  itemList.textContent = element
  return itemList
});

newIngredients.append(...addIngredient(ingredients))