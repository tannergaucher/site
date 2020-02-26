import { Link } from "gatsby"
import { ProjectCard } from "../components"
import React from "react"
import { useLatestProjects } from "../hooks"

export default function LatestProjectsSection() {
  const { edges } = useLatestProjects()

  return (
    <section className="container padding">
      <hr />
      <Link to="/projects" className="nav-link">
        <h2>Projects</h2>
      </Link>
      <div className="content-grid">
        {edges.map(edge => (
          <ProjectCard project={edge.node} />
        ))}
      </div>
    </section>
  )
}
