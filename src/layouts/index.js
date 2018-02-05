import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './custom.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

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
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper