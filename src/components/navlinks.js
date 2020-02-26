import { Navlink } from "."
import React from "react"
import { useSiteMetadata } from "../hooks"

export default function Navlinks({ location }) {
  const { social } = useSiteMetadata()

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
            href={social.github}
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
