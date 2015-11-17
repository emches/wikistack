var chai = require('chai')
var expect = chai.expect
var chai = require('chai');
var spies = require('chai-spies');

chai.use(spies);

describe('adds to 4', function(){
    it('can sum to 4', function(){
        expect(2+2).to.be.equal(4);
    });
});


describe('set timeout', function(){
    it('sets to 1000', function(done){
      var start = Date.now();
      var end;
      setTimeout(function(){
        end = Date.now();
       expect(end - start).to.be.closeTo(1000,50);
       done()
      }, 1000);
    });
});


describe('foreach loops', function(){
    it('runs once for each element', function(){
      var testArr = [1,2,3,4];
      var loopFunc = function(item){
              console.log(item+1);
      };

       var myFunc = chai.spy(loopFunc);
       testArr.forEach(myFunc)
       expect(myFunc).to.have.been.called.exactly(testArr.length)
    });
});




