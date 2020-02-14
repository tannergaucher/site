import { Link } from "gatsby"
import React from "react"

const Navlink = ({ text, to, location }) => {
  return (
    <Link
      data-is-active={location.pathname === to}
      to={to}
      className="nav-link navlink"
    >
      {text}
    </Link>
  )
}

export default Navlink
