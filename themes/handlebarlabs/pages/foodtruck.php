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
      <h1>Simple and Beautiful Design<br>
        for your Food Truck's Website</h1>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
    <div class="wrap">
      <?php hbl_do_footer(); ?>
    </div>
  </footer>
</div>
