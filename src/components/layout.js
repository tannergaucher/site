import "./layout.css"

import { Link } from "gatsby"
import { Navlinks } from "."
import PropTypes from "prop-types"
import React from "react"
import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title, description, social } = useSiteMetadata()
  const isIndexPage = location.pathname === "/"

  return (
    <>
      <header className="header container padding">
        <Link to="/" className="nav-link">
          {isIndexPage ? (
            <h1 className="title" style={{ marginTop: `var(--space-xl)` }}>
              {title}
            </h1>
          ) : (
            <h4 className="title site-title">{title}</h4>
          )}
        </Link>
        {isIndexPage && <h2>{description}</h2>}
        {isIndexPage ? (
          <nav className="nav" style={{ marginTop: `var(--space-md)` }}>
            <a
              className="nav-link"
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 style={{ margin: `0` }}>Github</h2>
            </a>
            <a className="nav-link" href="#contact">
              <h2 style={{ margin: `0` }}>Contact</h2>
            </a>
          </nav>
        ) : (
          <Navlinks location={location} />
        )}
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
