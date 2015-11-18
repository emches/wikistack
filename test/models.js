var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var Page = require('../models').Page;
var User = require('../models').User;

describe('Page model', function() {
  
  beforeEach(function(done) {
    var newPage = new Page({
      name: 'Test Name',
      title: 'Test Title',
      content: 'Test content',
      status: 'open',
      tags: ['test tag1, test tag2']
    });
    
    newPage.save();
    done();
  });
  
  describe('addPage', function() {
    //can create new page
    it('can create a new page', function() {
      Page.findOne({name: 'Test Name'}).exec()
      .then(function(page) {
        expect(page).to.equal(newPage);
      });
    });
    //test that db record fields match input
    //creates title when none is given
  });
  
  describe('find similar', function(){
    //find similar doesn't include original page
    //handle empty page set
    //handles bad page input
  });
  
  describe('find by tag', function() {
    //handle empty page set
    //handles bad page input
    //returns the correct pages
  });
  
  describe('pre validation', function() {
    //url title has no spaces or non word characters
  });
  
  describe('markedown', function() {
    //check page.renderedContent === marked(pageContent)
  });
  
  describe('route virtual', function(){
    //check that page.route = 'wiki' + page.urlTitle
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