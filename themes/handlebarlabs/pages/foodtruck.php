<?php
/*
Template Name: Food Truck Landing Page
*/

  // Remove content
  remove_all_actions( 'genesis_sidebar' );
  remove_all_actions( 'genesis_loop' );
  remove_all_actions( 'genesis_footer' );

  genesis();

?>
<style media="screen">
.site-inner {display: none;}
</style>

<div class="foodtruck">

  <!-- Leader -->
  <div class="row leader">
    <div class="container">
      <h1><span>Simple and Beautiful Design <span class="spacer"></span> <br>
        <span class="spacer"></span> for your Food Truck's Website</span></h1>
    </div>
  </div>

  <!-- Responsive Section -->
  <div class="row responsive section">
    <div class="container">
      <div class="col-md-8">
        <h2>Great on Any Device</h2>
        <p>
          Don't worry about where your customer is browsing from. Your website will look great on any device. Anytime, from anywhere.
          At Handlebar Labs we use responsive design to build one website for your food truck that will work on any size device.
        </p>
      </div>
      <div class="col-md-4">
        <img src="/wp-content/themes/handlebarlabs/images/foodtruck/responsive.png" alt="" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="seperator"></div>
  </div>

  <!-- Calendar Section -->
  <div class="row calendar section">
    <div class="container">
      <div class="col-md-8 col-md-push-4">
        <h2>Easy Calendar Integration</h2>
        <p>
          Keep you loyal fans in the know and inform your soon to be fans where you're going to be.
          We provide an easy to follow and always up to date calendar right on your food truck's website.
          No longer will your customers have to search through dozens of tweets to find out where you are.
        </p>
      </div>
      <div class="col-md-4 col-md-pull-8">
        <img src="/wp-content/themes/handlebarlabs/images/foodtruck/calendar.jpg" alt="" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="seperator"></div>
  </div>

  <!-- Menu Section -->
  <div class="row menu section">
    <div class="container">
      <div class="col-md-8">
        <h2>Amazing Menu</h2>
        <p>
          Once your customers know where you are, let them know exactly what you've got. Provide a full featured menu for your customers to love.
          To build up a burning craving to dash out of the office at lunch to come visit you.
        </p>
      </div>
      <div class="col-md-4">
        <img src="/wp-content/themes/handlebarlabs/images/foodtruck/menu.jpg" alt="" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="seperator"></div>
  </div>

  <!-- Pricing -->
  <div class="row pricing section">
    <div class="container">

      <div class="col-md-12">
        <h2>Are you ready?<br> Pricing starts at only $500</h2>
        <p>
          +$35/month for premium web hosting
        </p>
        <a href="#" class="btn btn-primary">Get a Free Consultation</a>
      </div>

      <div class="col-md-8 col-md-offset-2">
        <p>
          Don't worry. You're under <b>zero</b> obligation to buy. We'll talk with you and figure out exactly what is right for your food truck.
        </p>
      </div>

    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
    <div class="wrap">
      <?php hbl_do_footer(); ?>
    </div>
  </footer>

</div>
