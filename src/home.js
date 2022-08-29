export default function home() {

    // Main content - containers
    const main = document.createElement('main');
    const container = document.createElement('div');
    container.classList.add('homepage-container');
    main.appendChild(container);

    // Main content - title
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Welcome!!';
    container.appendChild(h1);

    // Main content - text
    const p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum suscipit quis atque vero blanditiis doloremque explicabo animi, dolorum ipsa eos aperiam necessitatibus ullam fuga eaque assumenda cum nam dolorem.';
    container.appendChild(p);

    return main;

}