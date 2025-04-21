const content = document.getElementById('content');

export default function loadMenu(){
    content.textContent = ""

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);
};