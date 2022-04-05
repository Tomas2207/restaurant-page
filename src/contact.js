import chefs from './img/chefs.jpg';
import question from './img/questions.jpg';

export default (li, li2, li3, logoConatiner) => {
  logoConatiner.innerHTML = '';
  li3.classList.add('li-home');
  li.classList.remove('li-home');
  li2.classList.remove('li-home');

  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menu-title');
  menuTitle.innerHTML = 'Contact';

  logoConatiner.appendChild(menuTitle);

  const chefsContainer = document.createElement('div');
  menuTitle.appendChild(chefsContainer);
  chefsContainer.classList.add('menu-item');

  const chefImg = new Image();
  chefImg.src = chefs;
  chefsContainer.appendChild(chefImg);
  chefImg.classList.add('item-img');

  const chefsDescription = document.createElement('span');
  chefsDescription.innerHTML =
    'Meet the Chefs<br><br> Meet our highly trained and experienced staff, responsible for creating the best quality dishes of the industry <br><br> Send your application for the guided tour of our kitchen at: tbr@notrealemail.com';
  chefsContainer.appendChild(chefsDescription);
  chefsDescription.classList.add('description');

  const questionContainer = document.createElement('div');
  menuTitle.appendChild(questionContainer);
  questionContainer.classList.add('menu-item');

  const questionImg = new Image();
  questionImg.src = question;
  questionContainer.appendChild(questionImg);
  questionImg.classList.add('item-img');

  const questionDescription = document.createElement('span');
  questionDescription.innerHTML =
    'Have any question about us?<br><br> Contact us at:<br><br> Tel: 555-555-555 <br> Email: tbr@notrealemail.com';
  questionContainer.appendChild(questionDescription);
  questionDescription.classList.add('description');
};
