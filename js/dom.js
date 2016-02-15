$(document).ready(function(){
  myBooks.renderToDom();

});

$('form').on('submit', function(event){
  event.preventDefault();
  var newBook = new Book({
    title: $('#book-title').val(),
    genre: $('#book-genre').val(),
    author: $('#book-author').val()
  });
  myBooks.addBook(newBook);
  $('#books').empty();
  myBooks.renderToDom();
  $('#book-title').val('');
  $('#book-genre').val('');
  $('#book-author').val('');
  $('#current').html('Nada');
});

$(document).on('click', '#read', function(){
  myBooks.startCurrentBook();
  $(this).hide();
  $('#current').html(myBooks.currentBook.title);
  $('#current').append('<br><button id="finish" class="btn btn-danger btn-md">Finished!</button>');
});

$(document).on('click', '#finish', function(){
  $('#books').empty();
  myBooks.finishCurrentBook();
  myBooks.renderToDom();
  $(this).hide();
  $('#read').show();
  if(myBooks.numNotRead > 0) {
    $('#current').html('Nada');
  } else {
    $('#current').html('No more books in queue. Add more booooooks!');
  }
});








