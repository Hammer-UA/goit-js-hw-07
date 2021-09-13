const allCategories = document.querySelector('#categories')
console.log(`В списке ${allCategories.children.length} категории.`)

const array = [...allCategories.children]
array.forEach(element => console.log(`Категория: ${element.firstElementChild.innerHTML}. Количество элементов: ${element.lastElementChild.children.length}`));