function changeThumbnail(){
$('.thumbnail').on('click', function(event) {
    const sourceImage = $(event.currentTarget).find("img").attr("src");
    const altImage = $(event.currentTarget).find("img").attr("alt");
    $(".hero img").attr('src', sourceImage).attr('alt', altImage);
  });

}
$(changeThumbnail());