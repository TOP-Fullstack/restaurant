import './style.scss';
import nav from './nav.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

// Call initial modules to populate landing page
const content = document.createElement('div');
content.classList.add('content');

const navbar = nav();
content.appendChild(navbar);

const homepage = home();
homepage.classList.add('current');
content.appendChild(homepage);

document.body.appendChild(content);

// Add functionality to each menu item to clear the current content and populate it with the selected item

let homeButton = document.querySelector('.home');
let menuButton = document.querySelector('.menu');
let contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', function () {

    document.querySelector('.current').remove();

    let added = home();
    added.classList.add('current');
    content.appendChild(added);

})

menuButton.addEventListener('click', function () {

    document.querySelector('.current').remove();

    let added = menu();
    added.classList.add('current');
    content.appendChild(added);

})

contactButton.addEventListener('click', function () {

    document.querySelector('.current').remove();

    let added = contact();
    added.classList.add('current');
    content.appendChild(added);

})


// let navbarItems = document.querySelector("ul").getElementsByTagName("li");

// for (let i = 0; i < navbarItems.length; i++) {
//     navbarItems[i].addEventListener('click', () => {

//         document.querySelector('.current').remove();
//         let clicked = navbarItems[i].className;

//         content.appendChild(clicked());

//     });
// }