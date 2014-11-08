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
  $('#contact').on('click', function(e) {
    e.preventDefault();

    var docHeight = $(document).height();
    $("body").append(
      "<div id='contactOverlay' class='contact-overlay'>" +
        "<span class='close pull-right'><i class='fa fa-close fa-2x'></i></span>" +
        "<div class='contact-text'>" +
          "<h1>Let's talk.</h1> <h3>Whether you want to talk or just ask us a question, " +
          "we want to hear from you.</h3>" +
          "<h3>Send an email to <a href='mailto:hello@handlebarlabs.com' target='_blank'>" +
          "hello@handlebarlabs.com</a></h3>" +
        "</div>" +
      "</div>"
    );

    var overlay = $("#contactOverlay");
    overlay.height(docHeight);
    overlay.find('.contact-text').center();

    $('#contactOverlay').on('click', function(e) {
      $('#contactOverlay').remove();
    });

    $(window).resize(function() {
      overlay.find('.contact-text').center();
    });
  });

});
