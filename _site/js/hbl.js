$(function() {
  jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
  };

  // Center hero unit
  $('.hero').center();

  // Center hero unit if page changes
  $(window).resize(function() {
    $('.hero').center();
  });
});
