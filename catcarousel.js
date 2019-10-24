// eslint-disable-next-line strict
function changeThumbnail(){
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    const imgAlt = $(event.currentTarget).find('img').attr('alt');
    // eslint-disable-next-line no-undef
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  });
}
$(changeThumbnail());