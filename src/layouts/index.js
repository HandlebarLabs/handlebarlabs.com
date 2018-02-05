import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import './custom.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Learn React Native | Handlebar Labs"
      meta={[
        {
          name: 'description',
          content: 'High Quality Online React Native Training Resources',
        },
        {
          name: 'keywords',
          content: 'react native, react, mobile development, training',
        },
      ]}
      link={[
        { rel: 'icon', href: '/static/favicon.png' },
        { rel: 'shortcut icon', href: '/static/favicon.png' },
      ]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
