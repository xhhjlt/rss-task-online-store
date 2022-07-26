/**
 * @jest-environment jsdom
 */

import DataStorage from '../src/components/model/storage/storage';

const storage = new DataStorage();

test('storage.cartClear() should remove all products from storage.cart arr', () => {
    storage.addToCart('1');
    storage.addToCart('2');
    storage.cartClear();
    expect(storage.cart.includes('1')).toEqual(false);
    expect(storage.cart.includes('2')).toEqual(false);
    expect(storage.cart.length).toEqual(0);
});

test('storage.cartClear() should remove all products from localStorage', () => {
    storage.addToCart('1');
    storage.addToCart('2');
    storage.cartClear();
    expect(localStorage.getItem('1')).toBeFalsy();
    expect(localStorage.getItem('2')).toBeFalsy();
});