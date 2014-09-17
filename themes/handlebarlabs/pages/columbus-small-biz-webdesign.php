<?php
/*
Template Name: Columbus Small biz web design Landing Page
*/

  // Remove content
  remove_all_actions( 'genesis_loop' );

  // Add custom body class to the head
  add_filter( 'body_class', 'add_body_class' );
  function add_body_class( $classes ) {
     $classes[] = 'small-biz-webdesign';
     return $classes;
  }

  // Remove header, navigation, breadcrumbs, footer widgets, footer
  add_filter( 'genesis_pre_get_option_site_layout', '__genesis_return_full_width_content' );
  remove_action( 'genesis_header', 'genesis_header_markup_open', 5 );
  remove_action( 'genesis_header', 'genesis_do_header' );
  remove_action( 'genesis_header', 'genesis_header_markup_close', 15 );
  remove_all_actions( 'genesis_header' );
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
