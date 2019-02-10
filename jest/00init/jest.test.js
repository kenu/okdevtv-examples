test('init', () => {
    expect(double(2)).toBe(4);
    expect(double('2')).toBe(4);
});
function double(a) {
    return a * 2;
}

