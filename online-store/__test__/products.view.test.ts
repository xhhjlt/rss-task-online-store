/**
 * @jest-environment jsdom
 */


import ISpaceshipData from '../src/components/model/data/ISpaceshipData';
import Products from '../src/components/view/products/products';

const cartCounter = document.createElement('span');
cartCounter.classList.add('cart-count');
document.body.append(cartCounter);
const conteiner = document.createElement('section');
conteiner.classList.add('products-conteiner');
document.body.append(conteiner);
const products = new Products;
const ships = require('./stabs/correct.json').spacecrafts as Array<ISpaceshipData>;

test('products.view should write how much products in cart within cart-count element', () => {
    products.view([], ['1', '2', '5', '9']);
    expect(cartCounter.innerText).toEqual('4');
});

test('products.view should add cards to products-conteiner', () => {
    products.view(ships.slice(0,2), []);
    expect(conteiner.querySelectorAll('.card')).toHaveLength(2);
});

test('products.view should add class in-cart for each card, which product in cart', () => {
    products.view(ships, ['1', '2', '5', '9']);
    expect(conteiner.querySelectorAll('.card.in-cart')).toHaveLength(4);
});