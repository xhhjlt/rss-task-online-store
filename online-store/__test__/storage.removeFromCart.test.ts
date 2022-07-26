/**
 * @jest-environment jsdom
 */

import DataStorage from '../src/components/model/storage/storage';

const storage = new DataStorage();

test('storage.removeFromCart(str) should remove str from storage.cart set', () => {
    storage.addToCart('anystring');
    storage.removeFromCart('anystring');
    expect(storage.cart.has('anystring')).toEqual(false);
});

test('storage.removeFromCart(str) should remove "str" from localStorage', () => {
    storage.addToCart('42');
    storage.removeFromCart('42');
    expect(localStorage.getItem('42')).toBeFalsy();
});