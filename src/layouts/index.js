import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Provider } from 'rebass'
import theme from './theme'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
     font-family: 'Circular';
     font-weight: 300;
     src: url('/static/font/circular/CircularStd-Book.otf') format("opentype");
  }
  @font-face {
     font-family: 'Circular';
     font-weight: 400;
     src: url('/static/font/circular/CircularStd-Medium.otf') format("opentype");
  }
   @font-face {
     font-family: 'Circular';
     font-weight: 700;
     src: url('/static/font/circular/CircularStd-Bold.otf') format("opentype");
  }
   @font-face {
     font-family: 'Circular';
     font-weight: 900;
     src: url('/static/font/circular/CircularStd-Black.otf') format("opentype");
  }

  ::selection {
    color: #fff;
    background: #878BC8;
 }
`
const Layout = ({ children, data }) => (
  <div>
    <Provider theme={theme}>
      <Helmet
        meta={[
          {
            name: 'description',
            content: "Serment d'Hippocrate pour data scientist",
          },
          {
            name: 'keywords',
            content:
              'hippocrate, data, science, serment hippocrate, data science',
          },
          {
            name: 'og:title',
            content: '/static/share_image.png',
          },
        ]}
      >
        <title />
        <link
          rel="icon"
          type="image/png"
          href="/static/hippocrate.ico"
          sizes="16x16"
        />
      </Helmet>
      {children()}
    </Provider>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
