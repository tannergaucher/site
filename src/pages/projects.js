import { Layout, SEO } from "../components"

import React from "react"
import { useAllProjects } from "../hooks"

const ProjectsPage = ({ location }) => {
  const { edges } = useAllProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <div className="page container padding">
        <div className="content-grid">
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
              <h3 className="card-text">{edge.node.frontmatter.description}</h3>
              <div className="card-text">
                <ul>
                  {edge.node.frontmatter.uses.map(tech => (
                    <li key={tech}>
                      <small>{tech}</small>
                    </li>
                  ))}
                </ul>
              </div>
              <nav className="nav card-text">
                <a
                  className="nav-link"
                  href={edge.node.frontmatter.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
                {edge.node.frontmatter.vimeoUrl && (
                  <a
                    className="nav-link"
                    href={edge.node.frontmatter.vimeoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
