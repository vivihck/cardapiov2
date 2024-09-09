let openShopping = document.querySelector('.compras');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'BISCOITO',
        image: '1.jpg',
        price: 8.50
    },
    {
        id: 2,
        name: 'HELLO COMBO',
        image: '2.jpg',
        price: 26.50
    },
    {
        id: 3,
        name: 'MINI COMBO',
        image: '3.jpg',
        price: 21.50
    },
    {
        id: 4,
        name: 'PRATO KIDS',
        image: '4.jpg',
        price: 22.50
    },
    {
        id: 5,
        name: 'MOCHI',
        image: '5.jpg',
        price: 16.50
    },
    {
        id: 7,
        name: 'MACARRÃO INSTANTANEO',
        image: '7.jpg',
        price: 10.90
    },
    {
        id: 8,
        name: 'KITTY ROCAMBOLE',
        image: '8.jpg',
        price: 15.90
    },
    {
        id: 9,
        name: 'COMBO BACON',
        image: '9.jpg',
        price: 29.90
    },
    {
        id: 10,
        name: 'PANQUECAS',
        image: '10.jpg',
        price: 22.90
    },
    {
        id: 11,
        name: 'SANDUBAS',
        image: '11.jpg',
        price: 17.50
    },
    {
        id: 12,
        name: 'SOBREMESA',
        image: '12.jpg',
        price: 20.50
    },
    {
        id: 13,
        name: 'SUSHI',
        image: '13.jpg',
        price: 19.90
    },

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Adicionar item</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }else{
        listCards[key].quantity += 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;
            count += value.quantity;
            
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button class="addd" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button class="addd" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <div>
                    <button class="excluir" onclick="deleteItem(${key})" >Excluir</button> 
                </div>
`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        deleteItem(key);
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function deleteItem(key) {
    delete listCards[key];
    reloadCard();
}
function clicou(){
    window.alert("Obrigado pela compra!")
}
