const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = ingredients.map(ingradient => {
  const ingradientItemRef = document.createElement("li");
  ingradientItemRef.textContent = ingradient;
  ingradientItemRef.classList.add('item')

  return ingradientItemRef;
});

const ingredientsListRef = document.querySelector("#ingredients");
ingredientsListRef.append(...ingredientsRef);