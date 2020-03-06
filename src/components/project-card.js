import React from "react"

export default function ProjectCard({ project }) {
  return (
    <div className="card" key={project.id}>
      <a
        href={project.frontmatter.deployedUrl}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="card-heading title">{project.frontmatter.title}</h2>
      </a>
      <p className="card-text">{project.frontmatter.description}</p>
      <div className="card-text">
        <ul>
          {project.frontmatter.uses.map(tech => (
            <li key={tech}>
              <small>{tech}</small>
            </li>
          ))}
        </ul>
      </div>
      <nav className="nav card-text">
        <a
          className="nav-link"
          href={project.frontmatter.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Source</h4>
        </a>
        {project.frontmatter.vimeoUrl && (
          <a
            className="nav-link"
            href={project.frontmatter.vimeoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Video </h4>
          </a>
        )}
      </nav>
    </div>
  )
}
