const expect = require('chai').expect;

describe('Haskell', () => {
    context('Problem 1', () => {
        it('it should return findTheLastElement of list[1, 2, 3, 4, 5, 6, 7]', () => {
            let result = findTheLastElement([1, 2, 3, 4, 5, 6, 7]);
            expect(result).to.be.eql(7)
        })
        it('it should return findTheLastElement of list[a, b, c, d, e, f]', () => {
            let result = findTheLastElement(['a', 'b', 'c', 'd','e','f']);
            expect(result).to.be.eql('f')
        })
    })
});
const findTheLastElement = (list) => {
    return list[list.length - 1];
}