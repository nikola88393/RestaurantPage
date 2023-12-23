function generateContacts() {
    let container = document.getElementById('content');

    let h1 = document.createElement('h1');
    h1.innerHTML = 'Contacts information';
    container.appendChild(h1);

    let img = document.createElement('img');
    img.src = '../src/assets/homeImg.jpg';
    container.appendChild(img);

    let phone = document.createElement('h3');
    phone.innerHTML = 'Phone: XXXXXXXXXX';
    container.appendChild(phone);

    let mail = document.createElement('h3');
    mail.innerHTML = 'Emial: XXXXXXXX@XXX.XX';
    container.appendChild(mail);

    let reserveTable = document.createElement('button');
    reserveTable.innerHTML = 'Reserve table';
    container.appendChild(reserveTable);
}

export default generateContacts;