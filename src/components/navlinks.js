import { Navlink } from "."
import React from "react"

export default function Navlinks({ location }) {
  return (
    <nav className="nav">
      <Navlink text="Posts" to="/posts" location={location} />
      <Navlink text="Projects" to="/projects" location={location} />
      <Navlink text="Photos" to="/photos" location={location} />
      {location.pathname === `/` && (
        <>
          <a
            href="#contact"
            className="navlink"
            style={{ textDecoration: `none`, fontSize: `var(--text-lg)` }}
          >
            Contact
          </a>
          <a
            href="#"
            className="navlink"
            style={{
              textDecoration: `none`,
              marginLeft: `var(--space-sm)`,
              fontSize: `var(--text-lg)`,
            }}
          >
            Github
          </a>
        </>
      )}
    </nav>
  )
}
