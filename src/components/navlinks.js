import { Navlink } from "."
import React from "react"
const Navlinks = ({ location }) => {
  return (
    <nav className="nav">
      <Navlink text="Posts" to="/" location={location} />
      <Navlink text="Projects" to="/projects" location={location} />
      <Navlink text="Photos" to="/photos" location={location} />
      <Navlink text="Contact" to="/contact" location={location} />
    </nav>
  )
}

export default Navlinks
