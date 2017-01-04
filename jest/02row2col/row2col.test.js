


test('row2col', () => {
    const src = [{date: '2019-02-11', c: 1, v1: 30}, {date: '2019-02-11', c: 2, v1: 50}];
    const exp = [{date: '2019-02-11', 'c1': 30, 'c2': 50}];
    expect(row2col(src)).toEqual(exp);
});
test('row2col other', () => {
    const src = [{date: '2019-02-12', c: 1, v1: 30}, {date: '2019-02-12', c: 2, v1: 50}];
    const exp = [{date: '2019-02-12', 'c1': 30, 'c2': 50}];
    expect(row2col(src)).toEqual(exp);
});

test('row2col other', () => {
    const src = [{date: '2019-02-11', c: 1, v1: 30}, {date: '2019-02-12', c: 2, v1: 50}];
    const exp = [{date: '2019-02-11', 'c1': 30, 'c2': 50},
    {date: '2019-02-12', 'c1': 30, 'c2': 50}];
    // expect(row2col(src)).toEqual(exp);
});

function row2col(list) {
    let res = [];
    let obj = {};
    list.forEach(el => {
        obj['date'] = el.date;
        obj['c' + el.c] = el.v1;
    });
    res.push(obj);
    return res;
}