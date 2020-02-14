import { Image, Layout, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"
import { useAllProjects } from "../hooks"

const ProjectsPage = ({ location }) => {
  const { edges } = useAllProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <article className="page container center padding">
        {edges.map(edge => (
          <div key={edge.node.id} style={{ marginBottom: `var(--space-xl)` }}>
            <h2 className="title">
              <a
                className="nav-link"
                href={edge.node.frontmatter.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {edge.node.frontmatter.title}
              </a>
            </h2>
            <p>{edge.node.frontmatter.description}</p>
            <nav className="nav">
              <a
                className="nav-link"
                href={edge.node.frontmatter.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>View Source</h4>
              </a>
              <a
                className="nav-link"
                href={edge.node.frontmatter.vimeoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>View Demo</h4>
              </a>
            </nav>
          </div>
        ))}
      </article>
    </Layout>
  )
}

export default ProjectsPage
