<?php
/*
Template Name: Food Truck Landing Page
*/

  // Remove content
  remove_all_actions( 'genesis_loop' );

  // Add custom body class to the head
  add_filter( 'body_class', 'add_body_class' );
  function add_body_class( $classes ) {
     $classes[] = 'foodtruck';
     return $classes;
  }

  // Remove header, navigation, breadcrumbs, footer widgets, footer
  add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
  remove_action( 'genesis_header', 'genesis_header_markup_open', 5 );
  remove_action( 'genesis_header', 'genesis_do_header' );
  remove_action( 'genesis_header', 'genesis_header_markup_close', 15 );
  remove_action( 'genesis_after_header', 'genesis_do_nav' );
  remove_action( 'genesis_after_header', 'genesis_do_subnav' );
  remove_action( 'genesis_before_loop', 'genesis_do_breadcrumbs');
  remove_action( 'genesis_before_footer', 'genesis_footer_widget_areas' );
  remove_all_actions( 'genesis_footer' );
  remove_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
  remove_action( 'genesis_footer', 'genesis_do_footer' );
  remove_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );

  genesis();

?>

<div class="foodtruck">

  <!-- Leader -->
  <div class="row leader">
    <div class="container">
      <div class="col-md-12">
        <h1><span>Simple and Beautiful Design <span class="spacer"></span> <br>
          <span class="spacer"></span> for your Food Truck's Website</span></h1>
      </div>
    </div>
  </div>

  <!-- Responsive Section -->
  <div class="container responsive section">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-0">
        <h2>Great on Any Device</h2>
        <p>
          Don't worry about where your customer is browsing from. Your website will look great on any device. Anytime, from anywhere.
          At Handlebar Labs we use responsive design to build one website for your food truck that will work on any size device.
        </p>
      </div>
      <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 img">
        <img src="/wp-content/themes/handlebarlabs/images/foodtruck/responsive.png"  alt="" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="seperator"></div>
    </div>
  </div>

  <!-- Calendar Section -->
  <div class="container calendar section">
    <div class="row">
      <div class="col-md-8 col-md-offset-0 col-xs-10 col-xs-offset-1 col-md-push-4">
        <h2>Easy Calendar Integration</h2>
        <p>
          Keep you loyal fans in the know and inform your soon to be fans where you're going to be.
          We provide an easy to follow and always up to date calendar right on your food truck's website.
          No longer will your customers have to search through dozens of tweets to find out where you are.
        </p>
      </div>
      <div class="col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 col-md-pull-8 img">
        <img src="/wp-content/themes/handlebarlabs/images/foodtruck/calendar.jpg" class="img-thumbnail" alt="" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="seperator"></div>
    </div>
  </div>

  <!-- Menu Section -->
  <div class="container menu section">
    <div class="row">
      <div class="col-md-8 col-md-offset-0 col-xs-10 col-xs-offset-1">
        <h2>Amazing Menu</h2>
        <p>
          Once your customers know where you are, let them know exactly what you've got. Provide a full featured menu for your customers to love.
          To build up a burning craving to dash out of the office at lunch to come visit you.
        </p>
      </div>
      <div class="col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 img">
        <img src="/wp-content/themes/handlebarlabs/images/foodtruck/menu.jpg" class="img-thumbnail" alt="" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="seperator"></div>
    </div>
  </div>

  <!-- Pricing -->
  <div class="container pricing section">
    <div class="row">

      <div class="col-md-12 col-md-offset-0 col-xs-10 col-xs-offset-1">
        <h2>Are you ready?<br> Pricing starts at only $500</h2>
        <p>
          +$35/month for premium web hosting
        </p>
        <a href="#" class="btn btn-primary row showContact">Get a Free Consultation</a>
      </div>

      <div class="col-xs-10 col-xs-offset-1 col-md-offset-2 col-md-8">
        <p>
          Don't worry. You're under <b>zero</b> obligation to buy. We'll talk with you and figure out exactly what is right for your food truck.
        </p>
      </div>

    </div>
  </div>

  <!-- Contact -->
  <div class="container contact">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <?php echo do_shortcode( '[contact-form-7 id="2245" title="Food Truck Landing"]' ); ?>
      </div>
    </div>
  </div>

  <div class="pad-bottom"></div>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
    <div class="wrap">
      <?php hbl_do_footer(); ?>
    </div>
  </footer>

</div>
