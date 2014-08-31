<?php
/**
 * Functions
 *
 * @package      HBL_Genesis_Child
 * @since        1.0.0
 * @author       Spencer Carli <spencercarli@gmail.com>
 *
 */

/**
 * Theme Setup
 * @since 1.0.0
 *
 * This setup function attaches all of the site-wide functions
 * to the correct hooks and filters. All the functions themselves
 * are defined below this setup function.
 *
 */

add_action('genesis_setup','child_theme_setup', 15);
function child_theme_setup() {

  // Setup some basic genesis stuff
  add_theme_support( 'html5' );
  add_theme_support( 'genesis-responsive-viewport' );
  add_theme_support( 'genesis-footer-widgets', 3 );

  //* Reposition the primary navigation menu
  remove_action( 'genesis_after_header', 'genesis_do_nav' );
  // add_action( 'genesis_before_header', 'genesis_do_nav', 12 );

  // Add in bootstrap menu
  add_action('genesis_header', 'hbl_do_nav', 12);

  // Reposition the secondary nav
  remove_action( 'genesis_after_header', 'genesis_do_subnav' );
  add_action( 'genesis_before_header', 'genesis_do_subnav', 13 );

  // Load in my scripts
  add_action( 'wp_enqueue_scripts', 'hbl_do_scripts' );

}

// Add bootstrap 3 navigation for primary nav
function hbl_do_nav() {
  wp_nav_menu(array(
    'menu' => 'Primary Navigation',
    'container' => 'nav',
    'container_class' => 'navbar navbar-default navbar-static-top',
    'menu_class' => 'nav navbar-nav navbar-right',
    'menu_id' => 'navigation',
    'items_wrap' => ' <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mry-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="mry-navbar-collapse-1">
        <ul id="%1$s" class="%2$s">%3$s</ul>
      </div>
    </div>'
  ));

}

// Enque scripts
function hbl_do_scripts() {

  // Bootstrap
  wp_register_script ('bootstrap', get_stylesheet_directory_uri() . '/js/bootstrap.js', array( 'jquery' ),'1',true);
  wp_enqueue_script('bootstrap');
}
