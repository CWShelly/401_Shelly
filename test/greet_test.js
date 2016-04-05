const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greet');

const name = 'Shelly';

describe('the greeting', ()=>{
  it('should greet the person by the name given in the CLI', ()=>{
    expect(greet(name)).to.equal('hello ' + name);
  });

  it('should greet the person by the name hardcoded', ()=>{
    expect(greet('Shelly')).to.equal('hello Shelly');
  });

});
