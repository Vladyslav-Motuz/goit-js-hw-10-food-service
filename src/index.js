import './sass/main.scss';

import menuCards from './menu.json';
import cardItem from './templates/food-card.hbs';

const menu = document.querySelector('.js-menu');

const createCardItem = (cards) => {
    return cards.map(cardItem).join('');
}
menu.insertAdjacentHTML('beforeend', createCardItem(menuCards));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const input = document.querySelector('#theme-switch-toggle');

const setClasslist = (addClassList, removeClassList) => {
    body.classList.add(`${addClassList}`);
    body.classList.remove(`${removeClassList}`);
};

const onInputTheme = (e) => {
    if (input.checked) {
        setClasslist(Theme.DARK, Theme.LIGHT);
    } else {
        setClasslist(Theme.LIGHT, Theme.DARK);
    }   
};

const settingThemeLocalhost = (e) => {
    if (input.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
};

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    input.checked = true;
};

input.addEventListener('change', onInputTheme);
input.addEventListener('change', settingThemeLocalhost);