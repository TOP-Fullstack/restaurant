export default function contact() {

    // Main content - title + containers
    const main = document.createElement('main');
    const content = document.createElement('div');
    content.classList.add('content-bg');
    main.appendChild(content);
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Home';
    content.appendChild(h1);

    // Main content - text
    const p = document.createElement('p');
    p.innerHTML = 'Contact page';
    content.appendChild(p);

    return main;

}