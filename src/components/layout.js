import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "semantic-styles"
import "../styles/overrides.css"

import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title, description, social } = useSiteMetadata()
  const isIndexPage = location.pathname === "/"

  return (
    <>
      <header className="header padding container">
        <div style={{ display: `flex`, flexDirection: `column` }}>
          <Link to="/" className="nav-link">
            {isIndexPage ? (
              <h1 className="title" style={{ marginBottom: `var(--space-sm)` }}>
                {title}
              </h1>
            ) : (
              <h4 className="title">{title}</h4>
            )}
          </Link>
          {isIndexPage && (
            <>
              <p style={{ marginBottom: `var(--space-sm)` }}>{description}</p>
              <nav className="nav">
                <a href="#contact" className="nav-link">
                  <h3>Contact</h3>
                </a>
                <a href={social.github} className="nav-link">
                  <h3>Github</h3>
                </a>
              </nav>
            </>
          )}
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer padding container">
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
