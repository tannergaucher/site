import { Layout, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"
import { useLatestPosts } from "../hooks"

const IndexPage = ({ location }) => {
  const { edges } = useLatestPosts()

  return (
    <Layout location={location}>
      <article className="padding page">
        <SEO title="Home" />
        <div className="content-grid">
          {edges.map(edge => (
            <div key={edge.node.id} className="card">
              <Link className="nav-link" to={edge.node.fields.slug}>
                <h2 className="card-heading title">
                  {edge.node.frontmatter.title}
                </h2>
              </Link>
              <p className="card-text">{edge.node.frontmatter.description}</p>
              <div className="card-text">
                {edge.node.frontmatter.tags.map(tag => (
                  <Link
                    className="nav-link"
                    key={tag}
                    to={`/posts/${kebabCase(tag)}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default IndexPage
