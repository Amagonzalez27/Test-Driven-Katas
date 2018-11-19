const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  let line =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });

  it('should be able to print one line if maxLen is greater than line length', () => {
    let shortLine = line.slice(0, 4);
    expect(wrap(shortLine, 5)).to.equal('Lore');
  });
});
