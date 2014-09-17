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

<div class="row leader">
  <div class="container">
    <div class="col-md-12">
      <h1>Are you ready to make your Columbus based Small business relevant?</h1>
      <h2>Expose your company to new customers?</h2>
      <h2>A top notch website will do just that.</h2>
    </div>
  </div>
</div>


<div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <p>
        I’m sure you already know what a website is. But why does it matter for your business? The way people are finding companies to work with is changing.
      </p>
      <p>
        No longer do people go to the phone book. They pull out their cell phone and google their problem. What’s going to show up? Companies that have put an emphasis on their web site.
      </p>
      <p>
        <b>It’s that simple.</b>
      </p>
      <p>
        Do you know that 35% of Google searches are local? Meaning that people are searching for a local service, a restaurant - you get my point.
      </p>
      <p>
        So do you show up?
      </p>
      <p>
        If not you could be losing business to your competition. Let’s face it, you and your family rely on beating your competition. <b>And if you don’t show up when people search for your service, you’re not going to beat your competition.</b>
      </p>
      <p>
        It’s harsh but it’s the truth.
      </p>
      <p>
        Enough of that. How do you become the top player in your industry? You build a website and optimize it. Well how do you do that?
      </p>

      <p>
        I’ll help you. My name is Spencer Carli - I’ve been building websites since I was 15 years old. I’ve worked with high-tech startups, musicians, event promoters, and the list goes on. I’ve got a passion for small business and the technical knowledge to help them online. <b>And I want to help you.</b>
      </p>

      <p>
        So, are you ready?
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <a href="#" class="btn btn-primary">I'm ready to expose my business to new customers</a>
      <p>
        Not sure yet? No worries. Read on, I’m sure I’ll cover you concerns.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <h2>Here are common concerns I’ve heard from previous customers</h2>
      <div class="question">
        <p class="question">
          “There’s no reason my business needs a website.”
        </p>
        <p>
          I’ll be honest, in some cases this may be true. But, if your competitors have a website - if they display photos of their work, their team, their happy customers. If they show that they’ve had customers and that they’re happy. Who would you trust? Think about this from your customers perspective. A website makes a first impression, and it will work 24/7. Always introducing new clients to you.
        </p>
      </div>

      <div class="question">
        <p class="question">
          “I don’t have time to manage a website.”
        </p>
        <p>
          I totally understand that. As a small business owner you’re busy and you already juggle so many things to keep your business running. I build websites that alleviate you from work. Not make more.
        </p>
        <p>
          Think about it like this. A website is constant marketing - working 24/7. No vacations. And you can just leave it be. Don’t worry about the technical stuff. I’ll take care of that.
        </p>
      </div>

      <div class="question">
        <p class="question">
          “I don’t have the technical skill to take care of a website.”
        </p>
        <p>
          If you’re working with Handlebar Labs don’t worry about your technical skill. If you can use email or a phone we can build you a website. I’ll handle all the technical aspects of your business. From domain name registration, design, and hosting. From start to finish I’m here to help you
        </p>
      </div>

      <div class="question">
        <p class="question">
          “I haven’t had a website for the last 20 years. I don’t need one now.”
        </p>
        <p>
          20 years ago you didn’t need a website. 10 years ago, 5 years ago you didn’t need a website. YESTERDAY you didn’t need a website.
        </p>
        <p>
          But successful businesses look at tomorrow. And tomorrow you’ll need a website. The usage of the internet, especially the mobile web is increasing every day. And to stay relevant you have to accept that and adapt your business.
        </p>
      </div>

      <div class="question">
        <p class="question">
          “I don’t have the money to build a website.”
        </p>
        <p>
          I understand it. I’m willing to work with you with a customized payment solution to ensure that your small business can stay relevant with its own website.
        </p>
        <p>
          The last few years have been tough. This is a reinvestment to bring your company’s image up with the constantly improving economy.
        </p>
      </div>

    </div>
  </div>

  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <h2>So, how are you feeling? Are you ready to get started?</h2>
      <a href="#" class="btn btn-primary">I’m ready. How much will it cost?</a>
      <a href="#" class="btn btn-default">I’ve got a question</a>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <h2>Pricing</h2>
      <p>
        I’m so happy that you’re ready to get a new website design for your small business. And I’m so happy I’m helping a fellow Columbus small business do that.
      </p>
      <p>
        To make things simple, all projects start at a flat $500 + $35/month. So what are you getting for this price. I’ll break it down exactly.
      </p>
      <p>
        For the $500 you get a website branded to your business.
      </p>
      <p>
        The $35/month gets you fully managed website hosting. This is paying for the server that keeps your website online all the time. It’s also covering all technical aspects that come with hosting. I’ll take care of keeping your site secure, backed up, and online. No need for you to think about that.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <h2>What’s the next step?</h2>
      <p>
        Use the contact form below. Fill in as much information about your business as you can and I’ll respond with the next steps.
      </p>
      <p>
        <b>Thank you</b> for choosing to work with me. I’m excited for what we can build together.
      </p>
    </div>
  </div>
</div>