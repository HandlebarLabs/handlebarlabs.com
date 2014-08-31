<?php
/*
Template Name: Homepage
*/

// Remove the main content
remove_all_actions( 'genesis_loop' );

// Remove the sidebar
remove_all_actions( 'genesis_sidebar' );

// Remove the footer
remove_all_actions( 'genesis_footer' );

genesis();

?>

<div class="old_home">
  <div id="lead" class="row">
    <div class="container">
      <div class="col-md-12">
        <h1 class="font-thin"><span class="font-semibold">85% of consumers</span> report looking for local businesses online.</h1>
        <h3>Are you making <span class="font-semibold">the best</span> first impression?</h3>
      </div>
    </div>
  </div>

  <div id="your-business" class="row slide">
    <div class="container">
      <div class="col-md-12">
        <h1>Do <span class="font-semibold">your customers</span> use smartphones, social media, or the web? Are you ready to compete with the large companies in your market? Do you know what makes <span class="font-semibold">your company stand out</span>?</h1>
      </div>
      <div class="col-md-4 col-md-offset-4">
        <hr>
      </div>
      <div class="col-md-10 col-md-offset-1 center">
        <p>
          <span class="font-semibold">You know your business better than anyone else.</span> Over 2 billion people use the internet, some of those are your customers; others are waiting to become your customers. The web, social media, and mobile usage have grown at an unprecedented rate and will continue to do so. Wouldn't you agree that it's important to stay up to date?
        </p>
        <p>
          However, <span class="font-semibold">as a small business owner your time is too valuable</span> to spend days researching the latest changes in Google’s search algorithm. That’s where Handlebar Labs comes in. Handlebar Labs helps small businesses stay competitive with the large companies in their market. Widening your audience and improving your engagement.
        </p>
        <p>
          <span class="font-semibold">Each small business is unique.</span> Be it a unique culture, product, or connection. You can use the web to show prospective customers what makes you unique or turn the one time customer into a loyal customer that comes back for decades to come.
        </p>
      </div>
      <div class="col-md-12 center">
        <h2 class="font-semibold">Let Handlebar Labs show the web how amazing your business is.</h2>
      </div>
    </div>
  </div>

  <div id="about" class="row slide">
    <div class="container">
      <div class="col-md-12 center">
        <h1 class="font-semibold">About Handlebar Labs</h1>
      </div>
      <div class="col-md-4 col-md-offset-4">
        <hr>
      </div>

      <div class="col-md-12">
        <div class="col-md-4">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/me-bw-small.png" alt="Spencer Carli" />
        </div>
        <div class="col-md-8">
          <p class="font-light">
            I’m Spencer Carli, the founder of Handlebar Labs. I’m passionate about small and locally owned business and want to help them succeed. I’ve grown up online- the internet and social media have always been part of my life. I’ve worked on the web, follow the latest tech trends and I want to help small businesses compete with the large companies in an ever growing online arena. Handlebar Labs was created to <span class="font-semibold">help small businesses compete online, where every company can have an influence</span>.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div id="resources" class="row slide">
    <div class="container center">
      <div class="col-md-12">
        <div class="col-md-6 col-md-offset-3 center">
          <h2>Want some free advice? We've got you covered. Check it out.</h2>
        </div>
      </div>
      <div class="col-md-4 col-md-offset-4">
        <hr>
      </div>
      <div class="col-md-6">
        <h2>The Blog</h2>
        <p class="font-light">We blog about what we learn from those we work with and provide ideas to help get your business's online presence to the next level.</p>
        <a href="<?php bloginfo('url'); ?>/blog" class="btn btn-primary btn-lg center">View all Posts ></a>
      </div>
      <div class="col-md-6">
        <h2>The Email List</h2>
        <p class="font-light" >
          We also manage an email list geared specifically for small businesses. Tips, tricks, and deals that you won’t find anywhere else.
        </p>
        <div class="col-md-10 col-md-offset-1">
            <!-- Begin MailChimp Signup Form -->
          <div id="mc_embed_signup">
            <form action="http://handlebarlabs.us7.list-manage2.com/subscribe/post?u=bf60b4e3e437871c247e61d43&amp;id=73837dd615" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate role="form">


              <div class="form-group">
                <div class="input-group">
                  <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Email Address">
                  <span class="input-group-btn">
                    <button type="submit" id="mc-embedded-subscribe" class="btn btn-primary">Subscribe</button>
                  </span>
                </div>
              </div>

              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;"><input type="text" name="b_bf60b4e3e437871c247e61d43_73837dd615" tabindex="-1" value=""></div>
            </form>
          </div>
          <!--End mc_embed_signup-->
        </div>
      </div>
    </div>
  </div>

  <div id="clients" class="row slide">
    <div class="container">
      <div class="col-md-10 col-md-offset-1 testimonial center">
        <h2 class="font-semibold">“Spencer (and his team) do an excellent job of taking a project from concept to completion. From project management to design, they are responsive and on top of every aspect of the process. I would recommend Handlebar Labs to any company.” <span class="font-light name">-Mike Clum, <a href="http://clummedia.com" target="_blank">Clum Media</a></span></h2>
      </div>
      <div class="col-md-12">
        <p class="font-light center">
          We take pride in exceeding our clients’ expectations.
        </p>
      </div>
    </div>
  </div>

  <div id="contact" class="row slide">
    <div class="container center">
    <h1 class="">Contact</h1>
      <p>
        I would love to learn about your business. Would you tell me about it? My personal email is <a href="mailto:spencer@handlebarlabs.com">spencer@handlebarlabs.com</a>.
      </p>
      <p>
        Interested in working together?
      </p>
      <div class="col-md-8 col-md-offset-2">
        <?php echo do_shortcode('[contact-form-7 id="2174" title="Homepage Contact"]'); ?>
      </div>
    </div>
  </div>
</div>
