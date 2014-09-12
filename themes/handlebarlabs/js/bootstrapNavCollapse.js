(function($) {
  $(document).ready( function() {
    /* Uses bootstrap 3 markup for navbar makes the button slide up the menu */
    $('.navbar-header').on('click','button',function(e) {
      e.preventDefault();
      var menuName = $(this).data('target'); $(menuName).slideToggle();
    });
    /* Make just the menu button viewable initially */
    var menuName = $('.navbar-header button').data('target');
    $(menuName).slideUp();

    // Hide/show contact form on the food truck page
    $('.showContact').on('click', function(e) {
      e.preventDefault();

      $('.contact').slideDown();
    });
  });
})(jQuery);
