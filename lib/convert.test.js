const convert = require('./convert')

test('convert cotação 4 to 4 quantidade ', () => {
    expect(convert.convert(4, 4)).toBe(16)
})

test('convert cotação 0 to 4 quantidade ', () => {
    expect(convert.convert(4, 4)).toBe(16)
})

test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney converts float', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})