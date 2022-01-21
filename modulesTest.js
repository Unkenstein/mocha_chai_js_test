if ( typeof window === 'undefined' ) {
  require('../../app/modules');
  var expect = require('chai').expect;
}

describe('the module pattern', function() {
  it('you should be able to create a function that returns a module', function() {
    var module = modulesAnswers.createModule('hello', 'matt');

    expect(module.sayIt).to.be.a('function');
    expect(module.name).to.eql('matt');
    expect(module.greeting).to.eql('hello');
    expect(module.sayIt()).to.eql('hello, matt');

    module.name = 'katniss';
    module.greeting = 'hi';
    expect(module.name).to.eql('katniss');
    expect(module.greeting).to.eql('hi');
    expect(module.sayIt()).to.eql('hi, katniss');
  });

  it('you should be able to create a function that returns a module (PART 2)', function() {
    var multiply = (x, y) => {
      return x * y;
    };

    var add = (x, y) => {
      return x + y
    };

    var module = modulesAnswers.createModule2(3, 4, multiply);

    expect(module.gibErgebnis).to.be.a('function');
    expect(module.funktion).to.be.a('function');
    expect(module.nummer1).to.eql(3);
    expect(module.nummer2).to.eql(4);
    expect(module.gibErgebnis()).to.eql(12);

    module.nummer2 = 5;

    expect(module.gibErgebnis()).to.eql(15);

    module.funktion = add;

    expect(module.gibErgebnis()).to.eql(8);
  });
});
