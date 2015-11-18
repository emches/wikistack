var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);
var Page = require('../models').Page;
var User = require('../models').User;

describe('wiki routes', function() {
  
  describe('wiki GET / route', function(){
    it('gets 200', function(done) {
      agent
        .get('/')
        .expect(200, done);
    });
  });

  describe('wiki GET /add route', function(){
    it('gets 200', function(done) {
      agent
        .get('/')
        .expect(200, done);      
    });
  });

  describe('wiki POST / route', function(){
    it('creates new page in db', function(done) {
      var newPage = {
        title: 'Test Title',
        content: 'Test content',
        status: 'open',
        tags: ['test tag1, test tag2']        
      };
      
      agent
        .post('/')
        .field('title', newPage.title)
        .field('content', newPage.content)
        .field('status', newPage.status)
        .then(function() {
          Page.findOne({ title: newPage.title })
            .then(function(page) {
              console.log(page);
              done();
            })
        })

    })
  });
  
  describe('wiki GET /search route', function(){
    xit('gets 200', function(){})
    
  });
  
  describe('wiki GET /:urlTitle route', function(){
    xit('sends 200 for existing page', function(){})
    xit('sends a 404 when the page does not exist', function(){})
  });
  
  describe('wiki GET /:urlTitle/similar route', function(){
    xit('gets 200 when page exists', function(){})
    xit('return 404 page with :urlTitle does not exist', function(){})
  });
  


});

describe('user routes', function() {
  
  describe('user / route', function() {
    xit('gets 200', function(){})
  });
  
  describe('user /:userId route', function() {
    xit('gets 200', function(){})
    xit('gets 404 when user does not exist', function(){})
  });

  
});