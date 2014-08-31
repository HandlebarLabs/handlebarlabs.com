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

  add_theme_support( 'html5' );
  add_theme_support( 'genesis-responsive-viewport' );
  add_theme_support( 'genesis-footer-widgets', 3 );
}
