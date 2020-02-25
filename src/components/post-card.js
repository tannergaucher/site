import { Link } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"

export default function PostCard({ post }) {
  return (
    <div key={post.id} className="card">
      <div>
        <Link className="nav-link" to={post.fields.slug}>
          <h2 className="card-heading title">{post.frontmatter.title}</h2>
        </Link>
        <p className="card-text">{post.frontmatter.description}</p>
      </div>
      <nav className="nav">
        {post.frontmatter.tags.map(tag => (
          <Link key={tag} to={`/posts/${kebabCase(tag)}`} className="nav-link">
            <h4 className="card-heading">{tag}</h4>
          </Link>
        ))}
      </nav>
    </div>
  )
}
