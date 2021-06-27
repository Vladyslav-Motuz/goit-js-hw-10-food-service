import './sass/main.scss';

import menuCards from './menu.json';
import cardItem from './templates/food-card.hbs';

const menu = document.querySelector('.js-menu');

const createCardItem = (cards) => {
    return cards.map(cardItem).join('');
}
menu.insertAdjacentHTML('beforeend', createCardItem(menuCards));

const input = document.querySelector('#theme-switch-toggle');
console.log(input);