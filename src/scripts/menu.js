const content = document.getElementById('content');

const dishes = [
    { name: "Lasagna", price: 25.90 },
    { name: "Margherita Pizza", price: 32.50 },
    { name: "Sushi Combo", price: 45.00 },
    { name: "Artisan Burger", price: 22.00 },
    { name: "Spaghetti Bolognese", price: 27.50 },
    { name: "Mexican Tacos", price: 19.90 },
    { name: "Chicken Risotto", price: 24.00 },
    { name: "Garlic Shrimp", price: 38.90 },
    { name: "Grilled Chicken", price: 20.00 },
    { name: "Caesar Salad", price: 18.50 }
  ];
export default function loadMenu(){
    content.textContent = ""
    content.className = 'menu-content';

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    const Ul = document.createElement('ul');

    dishes.forEach((value)=>{
        const Li = document.createElement('li');

        const name = document.createElement('p');
        name.innerHTML = value.name;
        
        const price = document.createElement('p');
        price.innerHTML = value.price;
        
        Li.appendChild(name);Li.appendChild(price);
        Ul.appendChild(Li);
    })

    menu.appendChild(Ul);

};