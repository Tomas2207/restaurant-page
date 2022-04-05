import rlogo from './img/logo.png';
import defaultMenu from './menu.js';
import defaultContact from './contact.js';

export default (() => {
  const content = document.getElementById('content');
  content.classList.add('content');

  const header = document.createElement('div');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.classList.add('h1-title');

  title.innerHTML = 'The best restaurant';

  const middle = document.createElement('div');
  middle.classList.add('middle');

  const logoConatiner = document.createElement('div');
  logoConatiner.classList.add('logo-container');
  const logo = new Image();
  logo.src = rlogo;
  logoConatiner.appendChild(logo);
  logo.classList.add('logo');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const list = document.createElement('ul');
  const li = document.createElement('li');
  li.classList.add('li-home');

  li.addEventListener('click', () => {
    li.classList.add('li-home');
    li2.classList.remove('li-home');
    li3.classList.remove('li-home');
    logoConatiner.innerHTML = '';
    logoConatiner.appendChild(logo);
  });

  const li2 = document.createElement('li');

  li2.addEventListener('click', () => {
    defaultMenu(li, li2, li3, logoConatiner);
  });

  const li3 = document.createElement('li');

  li3.addEventListener('click', () => {
    defaultContact(li, li2, li3, logoConatiner);
  });

  li.innerHTML = 'Home';
  li2.innerHTML = 'Menu';
  li3.innerHTML = 'Contact';

  const footer = document.createElement('div');
  footer.classList.add('footer');
  // footer.innerHTML = 'I am a footer';

  content.appendChild(header);
  header.appendChild(title);
  header.appendChild(menu);
  menu.appendChild(list);
  list.appendChild(li);
  list.appendChild(li2);
  list.appendChild(li3);
  content.appendChild(middle);
  middle.appendChild(logoConatiner);
  content.appendChild(footer);
})();
