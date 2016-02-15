// *** constructors *** //

var Book = function(attributes) {
  this.title = attributes.title;
  this.genre = attributes.genre;
  this.author = attributes.author;
  this.read = false;
  this.startDate = '';
  this.endDate = '';
};

var BookList = function() {
  this.numRead = 0;
  this.numNotRead = 0;
  this.nextBook = '';
  this.currentBook = '';
  this.lastBook = '';
  this.bookArr = [];
};


// *** methods **** //

BookList.prototype.addBook = function(book) {
  this.bookArr.push(book);
  this.numNotRead += 1;
  if (this.currentBook === '') {
    this.currentBook = book;
  } else if (this.nextBook === '') {
    this.nextBook = book;
  }
};

BookList.prototype.startCurrentBook = function() {
  this.currentBook.startDate = new Date(Date.now());
};

BookList.prototype.finishCurrentBook = function() {
  this.numRead += 1;
  this.numNotRead -= 1;
  this.currentBook.read = true;
  this.currentBook.endDate = new Date(Date.now());
  this.lastBook = this.currentBook;
  this.currentBook = this.nextBook;
  var index = this.bookArr.indexOf(this.currentBook);
  this.nextBook = this.bookArr[index + 1] || '';
};

BookList.prototype.renderToDom = function() {
  for (var i = 0; i < this.bookArr.length; i++) {
    $('#books').append('<tr><td>' + this.bookArr[i].title +
      '</td><td>' + this.bookArr[i].genre +
      '</td><td>'+ this.bookArr[i].author +
      '</td><td>' + this.bookArr[i].read + '</td></tr>');
  }
  if(myBooks.numNotRead > 0) {
    $('#books').append('<br><button id="read" class="btn btn-primary btn-md">Read Next Book!</button>');
  }
};

// *** create instances *** //

var myBooks = new BookList();

var book1 = new Book({
  title: 'The Tao of Pooh',
  genre: 'Philosophy',
  author: 'Benjamin Hoff'
});
var book2 = new Book({
  title: 'History of God',
  genre: 'Philosophy',
  author: 'Karen Armstrong'
});
var book3 = new Book({
  title: 'Unteathered Soul',
  genre: 'Metaphysical',
  author: 'Michael Singer'
});
var book4 = new Book({
  title: 'Wind-up Bird Chronicle',
  genre: 'Fiction',
  author: 'Huraki Murakami'
});


myBooks.addBook(book1);
// myBooks.addBook(book2);
// myBooks.addBook(book3);
myBooks.addBook(book4);


/* What does the "new" keyword do?

Creates a new Object
Creates and binds a new this to that object
It sets this new object's prototype property to be the constructor function's prototype object
It executes the constructor function
It returns the newly created object

*/