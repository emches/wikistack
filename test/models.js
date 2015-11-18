//var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var Page = require('../models').Page;
var User = require('../models').User;
var marked = require('marked');


describe('Page model', function() {
  var newPage;

  beforeEach(function(done) {
     newPage = new Page({
      title: 'Test Title',
      content: 'Test content',
      status: 'open',
      tags: ['test tag1, test tag2']
     });

    newPage.save();
    done();
  });

  afterEach(function(done) {
    Page.remove({content: 'Test content'}, done);

  });

  describe('addPage', function() {
    //can create new page
    xit('can create a new page', function(done) {
      Page.find({content: 'Test content'}).exec( function(err, pages){
         expect(pages.length).to.equal(1);
         expect(pages[0].title).to.equal(newPage.title);
         expect(pages[0].content).to.equal(newPage.content);
         expect(pages[0].status).to.equal(newPage.status);
         expect(pages[0].tags).to.deep.equal(newPage.tags);
         done();
      })
   });

    xit('creates urlTitle even when null', function(done) {
       Page.findOne({content: 'Test content'}).exec( function(err, page){
         console.log("PAGE", page);
         page.title = null;
         page.save(function(err){
         console.log("PAGE", page);
          expect(page.urlTitle).not.to.be.null;
         done()
        })
    })
   });

    //creates urlTitle from title
    xit('creates urlTitle from title', function(done) {
      Page.findOne({content: 'Test content'}).exec( function(err, page){
       console.log("PAGE", page);
       page.save(function(err){
        console.log("PAGE", page);
        expect(page.urlTitle).to.equal(page.title.replace(/\s/g, '_').replace(/\W/g, ''));
        done()
      });
    });
  });
});

  describe('find similar', function(){
    //find similar doesn't include original page
    xit('finds similar tags', function(done) {
      newPage2 = new Page({
        title: 'Test Title2',
        content: 'Test content',
        status: 'open',
        tags: ['test tag1, test tag2']
      });

    newPage2.save(function(err){
       newPage2.findSimilar()
         .then(function(similars){
          expect(similars.length).to.equal(1);
          expect(similars[0].title).to.equal(newPage.title);
           done();
         }).then(null, done)
    });

});
    //handle empty page set
    xit('handles empty result set', function(done) {
       newPage.findSimilar()
         .then(function(similars){
          expect(similars.length).to.equal(0);
           done();
         }).then(null, done)
    });

});


  describe('find by tag', function() {
    xit('finds matching tags', function(done) {
      newPage2 = new Page({
        title: 'Test Title2',
        content: 'Test content',
        status: 'open',
        tags: ['test tag1, test tag2']
      });

    newPage2.save(function(err){
       Page.findByTag(['test tag1, test tag2'])
         .then(function(tags){
          expect(tags.length).to.equal(2);
           done();
         }).then(null, done)
    });

   });
});


  describe('markedown', function() {
      xit('used marked correctly', function(done) {
        Page.find({content: 'Test content'}).exec( function(err, pages){
          expect(pages[0].renderedContent).to.equal(marked(pages[0].content));
          done();
        })
      });
  });

  describe('route virtual', function(){
     it('creates a route correctly', function(done) {
        Page.find({content: 'Test content'}).exec( function(err, pages){
          expect(pages[0].route).to.equal('/wiki/' + pages[0].urlTitle);
          done();
         })
      });
  })

});


describe('User model', function() {
  describe('findOrCreate method', function() {

    //can successfully create new user

    //does not create user when the user already exists

    //returns the user that exists

    //can't create user with mssing field

    //can't create user with invalid data types

    //can't create user with non unique email

  })
});