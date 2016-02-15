// *** constructors *** //

var Book = function(attributes) {
  this.title = attributes.title;
  this.genre = attributes.genre;
  this.author = attributes.author;
  this.read = false;
  this.startDate = "";
  this.endDate = "";
};

var BookList = function() {
  this.numRead = 0;
  this.numNotRead = 0;
  this.nextBook = "";
  this.curBook = "";
  this.lastBook = "";
  this.bookArr = [];
};