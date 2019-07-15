jQuery.fn.center = function () {
  this.css("position", "absolute");
  this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
  this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
  return this;
}

$('#lightbox a').click(function () {
  $('<div>', {
    id: 'black_overlay',
    click: function () {
      $(this).remove();
      $('#image').remove();
    }
  }).insertBefore('#lightbox');

  $('<img>', {
    id: 'image',
    src: $(this).attr('href'),
    load: function () {
      $(this).insertAfter('#lightbox').center();
    }
  })
  return false;
});