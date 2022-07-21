/**
 * @jest-environment jsdom
 */

import DataStorage from "../src/components/model/storage/storage";

const storage = new DataStorage();

test(`storage.removeFromCart(str) should remove str from storage.cart set`, () => {
    storage.addToCart("1");
    storage.addToCart("2");
    storage.cartClear();
    expect(storage.cart.has("1")).toEqual(false);
    expect(storage.cart.has("2")).toEqual(false);
    expect(storage.cart.size).toEqual(0);
})

test(`storage.removeFromCart(str) should remove "str" from localStorage`, () => {
    storage.addToCart("1");
    storage.addToCart("2");
    storage.cartClear();
    expect(localStorage.getItem("1")).toBeFalsy();
    expect(localStorage.getItem("2")).toBeFalsy();
})