console.log ("print this");
var cat;

describe('My Cat Object', function () {

  // Test creation of instance
  describe('Creating a new cat', function () {

    beforeEach(function(){
      cat = new Cat();
    });

    it('should be an instance of Cat', function () {
      expect(cat).to.be.an.instanceof(Cat);
    });

    it('should have a default color', function () {
      expect(cat.color).to.equal('brown');
    });

    it('should have a status that is a string', function () {
      expect(cat).to.have.property('status');
    });

    it('should be grumpy by default', function () {
      expect(cat.status).to.equal('grumpy');
    });

    it('should be happy after I pet it', function () {
      expect(cat.status).to.equal('grumpy');
      cat.pet();
      expect(cat.status).to.equal('happy');
    });

  });

    describe('Toggling ToDos Incomplete/Complete', function (){


    });



});

