import React, { useState } from "react"

export default function ProjectCard({ project }) {
  const [viewUses, setViewUses] = useState(false)

  return (
    <div className="card" key={project.id}>
      <a
        href={project.frontmatter.deployedUrl}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="card-heading title">{project.frontmatter.title}</h2>
        <p className="card-text">{project.frontmatter.description}</p>
      </a>
      {viewUses && (
        <div className="padding">
          <ul>
            {project.frontmatter.uses.map(tech => (
              <li key={tech} style={{ color: `var(--grey)` }}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}
      <nav className="nav padding" style={{ marginTop: `var(--space-sm)` }}>
        <button
          className="btn"
          onClick={() => {
            setViewUses(!viewUses)
          }}
        >
          Technology
        </button>
        <button className="btn">
          <a
            href={project.frontmatter.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: `none` }}
          >
            Github
          </a>
        </button>
        {project.frontmatter.vimeoUrl && (
          <button className="btn">
            <a
              href={project.frontmatter.vimeoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: `none` }}
            >
              Video
            </a>
          </button>
        )}
      </nav>
    </div>
  )
}
