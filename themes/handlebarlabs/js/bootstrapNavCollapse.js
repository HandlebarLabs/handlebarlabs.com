/* Uses bootstrap 3 markup for navbar makes the button slide up the menu */
(function($) {
  $(document).ready( function() {
    $('.navbar-header').on('click','button',function(e) {
      e.preventDefault();
      var menuName = $(this).data('target'); $(menuName).slideToggle();
    });
    /* Make just the menu button viewable initially */
    var menuName = $('.navbar-header button').data('target');
    $(menuName).slideUp();
  });
})(jQuery);
