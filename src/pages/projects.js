import { Layout, SEO, ProjectCard } from "../components"

import React from "react"
import { useAllProjects } from "../hooks"

const ProjectsPage = ({ location }) => {
  const { edges } = useAllProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <div className="page padding container">
        <h1 className="title text--xxxl page-title">Projects</h1>
        <div className="content-grid">
          {edges.map(edge => (
            <ProjectCard project={edge.node} key={edge.node.id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
