import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "../hooks"

export default function Bio() {
  const { title, description, social } = useSiteMetadata()

  return (
    <section className="container center padding">
      <h1
        className="title"
        style={{
          margin: `var(--space-lg) 0`,
          marginTop: `var(--space-xl)`,
        }}
      >
        <Link className="nav-link" to="/" style={{ fontWeight: `900` }}>
          {title}
        </Link>
      </h1>
      <h2 style={{ marginBottom: `var(--space-lg)` }}>{description}</h2>
      <nav className="nav">
        <a href={social.github} className="nav-link">
          <h3>Github</h3>
        </a>
        <a href="#contact" className="nav-link">
          <h3>Contact</h3>
        </a>
      </nav>
      <br />
    </section>
  )
}
