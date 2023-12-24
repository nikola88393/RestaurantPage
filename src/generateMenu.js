function generateMenu() {
    let container = document.getElementById('content');

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Our menu';
    container.appendChild(h1);

    let gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');

    for (let i = 0; i < 5; i++) {
        let div = document.createElement('div');
        div.classList.add('menuCard');

        let h3 = document.createElement('h3');
        h3.innerHTML = 'Tasty food';
        div.appendChild(h3);

        let img = document.createElement('img');
        img.src = img.src = '../src/assets/homeImg.jpg';
        div.appendChild(img);

        let p = document.createElement('p');
        p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum fuga voluptatum tempore dicta tempora perspiciatis eligendi quasi ullam optio.Autem aut dolore ab esse consequatur quia eligendi molestiae laborum!"
        div.appendChild(p);

        gridContainer.appendChild(div);
    }

    container.appendChild(gridContainer);
}

export default generateMenu;