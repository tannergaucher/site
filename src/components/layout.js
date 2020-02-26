import "./layout.css"

import { Link } from "gatsby"
import { Navlinks } from "."
import PropTypes from "prop-types"
import React from "react"
import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className="center" style={{ maxWidth: `var(--max-width)` }}>
      <header className="header padding">
        {location.pathname !== "/" && (
          <>
            <Link to="/" className="nav-link">
              <h4 className="site-title title">{title}</h4>
            </Link>
            <Navlinks location={location} />
          </>
        )}
      </header>
      <main className="main">{children}</main>
      <footer className="footer padding">
        <Link to="/" className="nav-link">
          <h4 className="site-title title">{title}</h4>
        </Link>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
