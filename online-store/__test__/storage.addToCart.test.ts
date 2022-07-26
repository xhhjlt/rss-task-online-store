/**
 * @jest-environment jsdom
 */

import DataStorage from '../src/components/model/storage/storage';

const storage = new DataStorage();

test('storage.addToCart(str) should add str to storage.cart arr', () => {
    storage.addToCart('anystring');
    expect(storage.cart.includes('anystring')).toEqual(true);
});

test('storage.addToCart(str) should add "str" to "cart" in localStorage', () => {
    storage.addToCart('42');
    expect(JSON.parse(localStorage.getItem('cart') || '[]').includes('42')).toBeTruthy();
});