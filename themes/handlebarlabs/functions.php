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
  add_action('genesis_header', 'hbl_do_nav', 4);

  // Reposition the secondary nav
  remove_action( 'genesis_after_header', 'genesis_do_subnav' );
  add_action( 'genesis_before_header', 'genesis_do_subnav', 13 );

  // Load in my scripts
  add_action( 'wp_enqueue_scripts', 'hbl_do_scripts' );

  // Remove the big genesis header
  remove_action( 'genesis_header', 'genesis_do_header' );

  // Change footer text
  remove_action( 'genesis_footer', 'genesis_do_footer' );
  add_action('genesis_footer', 'hbl_do_footer');

  // Change read more button
  add_filter( 'the_content_more_link', 'hbl_read_more_link' );

  // Enable the author box after the post
  add_filter( 'get_the_author_genesis_author_box_single', '__return_true' );

  // Favicon
  add_filter( 'genesis_pre_load_favicon', 'hbl_favicon_filter' );

  // Remove after post meta
  remove_action( 'genesis_entry_footer', 'genesis_post_meta');

  // Use custom post info (after post title)
  remove_action( 'genesis_entry_header', 'genesis_post_info', 12 );
  add_action( 'genesis_entry_header', 'hbl_post_info', 12 );
}

// Add bootstrap 3 navigation for primary nav
function hbl_do_nav() {
  wp_nav_menu(array(
    'menu' => 'Primary Navigation',
    'container' => 'nav',
    'container_class' => 'navbar navbar-default navbar-static-top',
    'menu_class' => 'nav navbar-nav navbar-right',
    'menu_id' => 'navigation',
    'items_wrap' => '<div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mry-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Handlebar Labs</a>
      </div>
      <div class="collapse navbar-collapse" id="mry-navbar-collapse-1">
        <ul id="%1$s" class="%2$s">%3$s</ul>
      </div>
    </div>'
  ));

}

// Footer text
function hbl_do_footer() {
  echo 'Copyright &#xa9; 2014 &#x000B7 <a href="http://handlebarlabs.com">Handlebar Labs</a>';
}

// Enque scripts
function hbl_do_scripts() {

  // Nav collapse. Delete this if I load in all of bootstrap
  wp_register_script ('bootstrapNavCollapse', get_stylesheet_directory_uri() . '/js/bootstrapNavCollapse.js', array( 'jquery' ),'1',true);
  wp_enqueue_script('bootstrapNavCollapse');
}

// Read more button
function hbl_read_more_link() {
	return '<a class="more-link btn btn-primary" href="' . get_permalink() . '">Continue Reading</a>';
}

// My favicon
function hbl_favicon_filter( $favicon_url ) {
	return get_stylesheet_directory_uri() . '/images/favicon.ico';
}

// After post title
function hbl_post_info() {

  if ( 'page' === get_post_type() )
    return;

  $output = genesis_markup( array(
    'html5'   => '<p %s>',
    'xhtml'   => '<div class="post-info">',
    'context' => 'entry-meta-before-content',
    'echo'    => false,
  ) );

  $output .= apply_filters( 'genesis_post_info', '[post_date] ' );
  $output .= genesis_html5() ? '</p>' : '</div>';

  echo $output;

}
