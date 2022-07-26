/**
 * @jest-environment jsdom
 */

import DataStorage from '../src/components/model/storage/storage';

const storage = new DataStorage();

test('storage.addToCart(str) should add str to storage.cart set', () => {
    storage.addToCart('anystring');
    expect(storage.cart.has('anystring')).toEqual(true);
});

test('storage.addToCart(str) should add "str" to localStorage', () => {
    storage.addToCart('42');
    expect(localStorage.getItem('42')).toBeTruthy();
});