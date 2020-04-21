import { Link } from "gatsby"
import { ProjectCard } from "../components"
import React from "react"
import { useLatestProjects } from "../hooks"

export default function LatestProjectsSection() {
  const { edges } = useLatestProjects()

  return (
    <section className="padding">
      <hr />
      <Link to="/projects" className="nav-link animated-link">
        <h2>
          View All Projects <span className="animated">&#8594;</span>
        </h2>
      </Link>
      <div className="content-grid">
        {edges.map(edge => (
          <ProjectCard project={edge.node} key={edge.node.id} />
        ))}
      </div>
    </section>
  )
}
