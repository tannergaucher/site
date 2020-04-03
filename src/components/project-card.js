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
        <p className="card-text">{project.frontmatter.description}</p>
      </a>
      <div className="padding">
        <ul>
          {project.frontmatter.uses.map(tech => (
            <li key={tech} style={{ color: `var(--grey)` }}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-heading">
        <a
          className="nav-link text--md"
          href={project.frontmatter.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        {project.frontmatter.vimeoUrl && (
          <a
            className="nav-link text--md"
            href={project.frontmatter.vimeoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Video
          </a>
        )}
      </div>
    </div>
  )
}
