const content = document.getElementById('content');
import loadMenu from "./menu";

export default function loadHome(){
    content.textContent = ""

    const tittle = document.createElement('h1');
    tittle.innerHTML = "Villa Sabor";
    content.appendChild(tittle);

    const information_container = document.createElement('div');
    information_container.classList.add('information-container');
    
    content.appendChild(information_container);
    content.className ='home-content';

    const information = document.createElement('div');
    const information_text = document.createElement('p');
    information.classList.add('information');
    information_text.innerHTML = 
    `
        An inviting restaurant in the city,
        known for its excellence,
        serves the best food in the region.
        Its dishes are well-seasoned, fresh,
        and prepared with great care.
        The atmosphere is pleasant,
        and the service is impeccable.
        It stands out for its shrimp risotto
        and chocolate dessert.
        Unmatched quality and flavor.
    `
    ;
    
    information.appendChild(information_text);


    information_container.appendChild(information);

    const call_to_action = document.createElement('button');
    call_to_action.classList.add('call-to-action');
    call_to_action.innerHTML = "Order Now";

    content.appendChild(call_to_action);

    call_to_action.addEventListener('click',()=>{
        loadMenu();
    });
    
};