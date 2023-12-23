import "./style.css";
import generateHome from "./generateHome";
import generateMenu from "./generateMenu";
import generateContacts from "./generateContacts";

function clearContents() {
    let content = document.getElementById('content');
    content.innerHTML = '';
}

function changeTabs() {
    let buttons = document.querySelectorAll('header button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clearContents();
            if (button.innerHTML === 'Home') {
                generateHome();
            }
            else if (button.innerHTML === 'Menu') {
                generateMenu();
            }
            else if (button.innerHTML === 'Contacts') {
                generateContacts();
            }
        })
    })
}
generateHome();
changeTabs();