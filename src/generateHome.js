function generateHome() {
    let container = document.getElementById('content');

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Restaurant name blah blah';
    container.appendChild(h1);

    let img = document.createElement('img');
    img.src = '../src/assets/homeImg.jpg';
    container.appendChild(img);


    for (let i = 0; i < 3; i++) {
        let p = document.createElement('p');
        p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum fuga voluptatum tempore dicta tempora perspiciatis eligendi quasi ullam optio.Autem aut dolore ab esse consequatur quia eligendi molestiae laborum!"
        container.appendChild(p);
    }
}

export default generateHome;