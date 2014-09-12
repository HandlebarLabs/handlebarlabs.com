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
          At Handlebar Labs we use responsive design to build one site that will work on any size device.
        </p>
      </div>
      <div class="col-md-4"></div>
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
          Keep you loyal fans in the know. Provide an easy to follow and always up to date calendar right on your homepage.
          No longer will your customers have to search through dozens of tweets to find out where you are.
        </p>
      </div>
      <div class="col-md-4 col-md-pull-8"></div>
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
          Once your customers know where you are, let them know what they want. Provide a full featured menu for your customers to love.
          Build up the burning desire to come out to your truck at lunch. Play on that primal instict, give them food.
        </p>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
    <div class="wrap">
      <?php hbl_do_footer(); ?>
    </div>
  </footer>

</div>
