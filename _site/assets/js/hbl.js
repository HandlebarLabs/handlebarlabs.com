// Minify by using CMD+Shift+M
// Need `minifier` package on atom

$(function() {
  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
  };

  // Homepage
  // =========================================
  // Center hero unit
  $('.hero').center();

  // Center hero unit if page changes
  $(window).resize(function() {
    $('.hero').center();
  });


  // Contact
  // =========================================
  $('.contact').on('click', function(e) {
    e.preventDefault();

    $("body").find('.contact-overlay').show();

    var overlay = $(".contact-overlay");
    overlay.height($(document).height());
    overlay.find('.contact-text').center();

    $(window).resize(function() {
      overlay.find('.contact-text').center();
    });

    $('.contact-overlay').on('click', function(e) {
      $('.contact-overlay').hide();
    });
  });

});
