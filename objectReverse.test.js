const objectReverse = require('./objectReverse');

test('Test 1', () => {
    expect(
        objectReverse({
            hired: { be: { to: { deserve: 'I' } } },
        })
    ).toEqual({
        I: { deserve: { to: { be: 'hired' } } },
    });
});

test('Test 2', () => {
    expect(
        objectReverse({
            Bryant: 'Kobe',
        })
    ).toEqual({
        Kobe: 'Bryant',
    });
});

test('Test 3', () => {
    expect(
        objectReverse({
            a: { b: { c: { d: { e: { f: { g: { h: { i: { j: 'k' } } } } } } } } },
        })
    ).toEqual({
        k: { j: { i: { h: { g: { f: { e: { d: { c: { b: 'a' } } } } } } } } },
    });
});
