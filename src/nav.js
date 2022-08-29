export default function nav() {

    // Header
    const header = document.createElement('header');

    // Hero banner
    const hero = document.createElement('div');
    hero.classList.add('hero');
    header.appendChild(hero);

    // Nav bar elements
    const nav = document.createElement('nav');
    header.appendChild(nav);

    // Nav bar navigation elements
    const ul = document.createElement('ul');
    nav.appendChild(ul);
    const tabs = ['Home', 'Menu', 'Contact'];
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.innerHTML = tabs[i]
        li.classList.add(`${tabs[i].toLowerCase()}`);
        ul.appendChild(li);
    }

    return header;
}