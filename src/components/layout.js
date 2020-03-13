import "./layout.css"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title, description, social } = useSiteMetadata()
  const isIndexPage = location.pathname === "/"

  return (
    <>
      <header className="header container padding">
        <div style={{ display: `flex`, flexDirection: `column` }}>
          <Link to="/" className="nav-link">
            {isIndexPage ? (
              <h1 className="title" style={{ marginTop: `var(--space-xl)` }}>
                {title}
              </h1>
            ) : (
              <h4 className="title site-title">{title}</h4>
            )}
          </Link>
          {isIndexPage && (
            <>
              <h2>{description}</h2>{" "}
              <nav className="nav">
                <a
                  href="#contact"
                  className="nav-link navlink"
                  style={{ textDecoration: `none` }}
                >
                  Contact
                </a>
                <a
                  href={social.github}
                  className="nav-link navlink"
                  style={{
                    textDecoration: `none`,
                    marginLeft: `var(--space-sm)`,
                  }}
                >
                  Github
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
