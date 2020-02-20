import { Image, Layout, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"
import { useAllProjects } from "../hooks"

const ProjectsPage = ({ location }) => {
  const { edges } = useAllProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <article className="page padding content-grid">
        {edges.map(edge => (
          <div className="card" key={edge.node.id}>
            <a
              className="nav-link"
              href={edge.node.frontmatter.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="card-heading title">
                {edge.node.frontmatter.title}
              </h2>
            </a>
            <p className="card-text">{edge.node.frontmatter.description}</p>
            <nav className="nav card-text">
              <a
                className="nav-link"
                href={edge.node.frontmatter.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
              <a
                className="nav-link"
                href={edge.node.frontmatter.vimeoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </nav>
          </div>
        ))}
      </article>
    </Layout>
  )
}

export default ProjectsPage
