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

<!-- Leader -->
<div class="row leader">

</div>
