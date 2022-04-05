import winee from './img/wine.jpg';
import firstDish from './img/firstDish.jpg';

export default (li, li2, li3, logoConatiner) => {
  logoConatiner.innerHTML = '';
  li2.classList.add('li-home');
  li.classList.remove('li-home');
  li3.classList.remove('li-home');

  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menu-title');
  menuTitle.innerHTML = 'Menu';

  logoConatiner.appendChild(menuTitle);

  const wineContainer = document.createElement('div');
  menuTitle.appendChild(wineContainer);
  wineContainer.classList.add('menu-item');

  const wine = new Image();
  wine.src = winee;
  wineContainer.appendChild(wine);
  wine.classList.add('item-img');

  const wineDescription = document.createElement('span');
  wineDescription.innerHTML =
    '$350 <br>200 year old red wine<br><br> After 200 years in French oak, the wine has developed a beautiful rich aroma and a rich, full taste, which makes it the ideal wine for both wine lovers and less experienced wine drinkers.';
  wineContainer.appendChild(wineDescription);
  wineDescription.classList.add('description');

  const firstContainer = document.createElement('div');
  menuTitle.appendChild(firstContainer);
  firstContainer.classList.add('menu-item');

  const first = new Image();
  first.src = firstDish;
  firstContainer.appendChild(first);
  first.classList.add('item-img');

  const dishDescription = document.createElement('span');
  dishDescription.innerHTML =
    ' $550 <br>Special Dish<br><br>The world famous chef Michael Cimarusti, who is a 30 year veteran, will be cooking this special dish that has atracted so much attention to the restaurant over the years.';
  firstContainer.appendChild(dishDescription);
  dishDescription.classList.add('description');
};
