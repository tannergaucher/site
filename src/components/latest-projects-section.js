import { Link } from "gatsby"
import { ProjectCard } from "../components"
import React from "react"
import { useLatestProjects } from "../hooks"

export default function LatestProjectsSection() {
  const { edges } = useLatestProjects()

  return (
    <section className="padding">
      <div className="content-grid">
        {edges.map(edge => (
          <ProjectCard project={edge.node} />
        ))}
      </div>
      <br />
      <div className="container center">
        <Link className="nav-link" to="/projects">
          <h2>Projects &#8594;</h2>
        </Link>
      </div>
    </section>
  )
}
