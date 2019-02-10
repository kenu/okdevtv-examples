const arrayUtils = require('./arrayUtils');

let arr1 = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }];
let arr2 = [{ a: 1, c: 2 }, { a: 3, c: 3 }];

test('merge object array', () => {
    const arr3 = arrayUtils.merge('a', arr1, arr2);
    expect(arr3.length).toBe(3);
    expect(arr3[0]).toEqual({ a: 1, b: 2, c: 2 });
});


test('merge object key', () => {
    const arr3 = arrayUtils.merge('a', arr2, arr1);
    expect(arr3.length).toBe(3);
    expect(arr3[0]).toEqual({ a: 1, b: 2, c: 2 });
});

test('object array base_key value list', () => {
    const result = arrayUtils.getBasekeyValues('a', arr1);
    expect(result).toEqual([1, 2, 3]);
});

test('array set', () => {
    const keys1 = arrayUtils.getBasekeyValues('a', arr1);
    const keys2 = arrayUtils.getBasekeyValues('a', arr2);
    let keys3 = keys1.concat(keys2);
    let keys4 = keys3.filter(function (item, pos) {
        return keys3.indexOf(item) == pos
    });
    expect(keys4).toEqual([1, 2, 3]);
});

test('array set2', () => {
    const keys1 = arrayUtils.getBasekeyValues('a', arr1);
    const keys2 = arrayUtils.getBasekeyValues('a', arr2);
    let keys3 = keys2.concat(keys1);
    let keys4 = keys3.filter(function (item, pos) {
        return keys3.indexOf(item) == pos
    });
    expect(keys4).toEqual([1, 3, 2]);
});
