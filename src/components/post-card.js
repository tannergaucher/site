import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { kebabCase } from "lodash"

export default function PostCard({ post }) {
  return (
    <div key={post.id} className="card">
      <div>
        <Img
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          className="card-image"
        />
        <Link className="nav-link" to={post.fields.slug}>
          <h2 className="card-heading">{post.frontmatter.title}</h2>
          <p className="card-text">{post.frontmatter.description}</p>
        </Link>
      </div>
      <nav className="card-heading">
        {post.frontmatter.tags.map(tag => (
          <Link
            className="nav-link text--md"
            to={`/posts/${kebabCase(tag)}`}
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </nav>
    </div>
  )
}
