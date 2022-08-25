/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// import TestimonialImage from '../images/testimonial.jpg';

const AboutHBL = () => {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center py-12">
            <h2 className="h2 mb-4">
              Trusted by over 27,000 developers & companies around the world
            </h2>
            <p className="text-xl text-gray-600">
              Handlebar Labs partners with each client to design and build the
              best solution for their unique situation.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-2 md:px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img
                    className="relative rounded-full"
                    src="https://pbs.twimg.com/profile_images/855165947258208257/e7El40WZ_400x400.jpg"
                    width="96"
                    height="96"
                    alt="Testimonial 01"
                  />
                </div>
                {/* <blockquote className="text-xl font-medium mb-4">
                  I love this product and would recommend it to anyone. Could be
                  not easier to use, and our multiple websites are wonderful. We
                  get nice comments all the time.
                </blockquote> */}
                {/* <cite className="block font-bold text-lg not-italic mb-1">
                  Spencer Carli
                </cite> */}
                <p className="text-xl font-normal mb-4">
                  I'm{' '}
                  <a
                    href="https://twitter.com/spencer_carli"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500"
                  >
                    Spencer
                  </a>
                  , the person behind Handlebar Labs. I've been a freelance
                  software developer for 8 years and currently live in the woods
                  of Northwest Michigan overlooking a lake. I've worked across
                  the entire stack, with JavaScript, but in the past years I've
                  focused almost entirely on frontend development with a focus
                  on building apps with React Native.
                </p>
                {/* <p className="text-xl font-normal mb-4">
                  I've worked across the entire stack, with JavaScript, but in
                  the past years, I've focused almost entirely on frontend
                  development with a focus on building apps with React Native.
                </p> */}
                <div className="text-gray-600">
                  <span>Founder,</span>{' '}
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://handlebarlabs.com"
                  >
                    Handlebar Labs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHBL;
