import './sass/main.scss';
import foodCard from './templates/food-cars.hbs';
import foods from './menu.json';
// console.log(foodCard(foods[1]));
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };



const foodContainer = document.querySelector('.js-menu');

const bodyTRef = document.querySelector('body');

const cardsMarkup = CreateFoodCardsMark(foods);

foodContainer.insertAdjacentHTML('beforeend', cardsMarkup);

const btnRef = document.querySelector('#theme-switch-toggle');

if (!localStorage.getItem('myData')) {
    bodyTRef.classList.add(Theme.LIGHT);
}
localStorageSetTheme();

console.log(btnRef);
function  CreateFoodCardsMark(foods) {
 
    return foods.map(foodCard).join('')
};

const settings = {
    theme: Theme.LIGHT,
    isChecked: false
}

btnRef.addEventListener('change', changeThemToogle);

function changeThemToogle() {
    console.log(btnRef.checked);
    if (btnRef.checked === true) { 
        addThemeBody()
    } else remuveThemeBody()
}

function addThemeBody() {
  
        bodyTRef.classList.remove(Theme.LIGHT);
        bodyTRef.classList.add(Theme.DARK);
        localStorage.removeItem('myData');
        settings.theme = Theme.DARK;
        settings.isChecked = true;
        localStorage.setItem('myData', JSON.stringify(settings));
    
};
function remuveThemeBody() {
    bodyTRef.classList.remove(Theme.DARK);
    bodyTRef.classList.add(Theme.LIGHT);
    localStorage.removeItem('myData');
    settings.theme = Theme.LIGHT;
    settings.isChecked = false;
    localStorage.setItem('myData', JSON.stringify(settings));
};
function localStorageSetTheme() {
    const savedSettings = localStorage.getItem('myData');
    if (savedSettings) {
    const parsedSettings = JSON.parse(savedSettings);
    const lsBodyTheme = parsedSettings.theme;
    const lsIsChecked = parsedSettings.isChecked;

      if (lsIsChecked === true) {
        btnRef.setAttribute('checked', true);
        bodyTRef.classList.add(Theme.DARK);
    } else {
        bodyTRef.classList.add(Theme.LIGHT);
    }
    }
     
}














