import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const isHome = window.location.pathname === '/';
      // const isHome = true;
      // console.log('isHome', isHome);

      let headerClasses = ' ';
      headerClasses += isHome ? 'ph4-ns ph2-m ph3 fixed-ns top-0 left-0 right-0 bg-fafafa z-1' : '';

      return (
        <div className="parallax">
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Personal website of Cristiano Dalbem, a designer of products and systems.' },
            ]}
          >
            <html lang="en" />
            <link
              rel="stylesheet"
              href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
            />
          </Helmet>
 
          <div className={headerClasses}>
            <Header/>
          </div>

          <div className="ph4-ns ph2-m ph3 mt6-ns mt4 mb0 bb b--light-gray lh-copy">
            {children}
          </div>

          <div className="ph4-ns ph2-m ph3 bg-near-white db-ns dn">
            <Footer/>
          </div>
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
