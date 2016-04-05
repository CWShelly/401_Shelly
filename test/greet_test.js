const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greet');
const name = process.argv[2];

describe('the greeting', ()=>{
  it('should greet the person by the name given', ()=>{
    expect(greet(name)).to.equal('hello ' + name);
  });
});
