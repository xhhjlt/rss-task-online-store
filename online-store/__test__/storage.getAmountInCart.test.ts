/**
 * @jest-environment jsdom
 */

import DataStorage from "../src/components/model/storage/storage";

const storage = new DataStorage();

test(`storage.getAmountInCart() should return number, which indicate how much products in cart`, () => {
    storage.addToCart("1");
    storage.addToCart("2");
    storage.addToCart("3");
    storage.addToCart("3");
    expect(storage.getAmountInCart()).toEqual(3);
})