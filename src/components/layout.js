import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "semantic-styles"

import "../styles/overrides.css"
import "../styles/local.css"

import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title, description, social } = useSiteMetadata()

  const isIndexPage = location.pathname === `/`

  return (
    <>
      <header className="header padding container">
        <div style={{ display: `flex`, flexDirection: `column` }}>
          <Link to="/" className="nav-link">
            {isIndexPage ? (
              <h1 className="title">{title}</h1>
            ) : (
              <h4 className="title">{title}</h4>
            )}
          </Link>
          {isIndexPage && (
            <>
              <h2 style={{ marginTop: 0 }}>{description}</h2>
              <nav className="nav">
                <a href="#contact" className="nav-link">
                  <h3>Contact</h3>
                </a>
                <a
                  href={social.github}
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>Github</h3>
                </a>
              </nav>
            </>
          )}
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer container padding">
        <Link to="/" className="nav-link">
          <h4 className="site-title title">{title}</h4>
        </Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
