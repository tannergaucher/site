import { Layout, SEO } from "../components"
import { useLatestPosts, useSiteMetadata } from "../hooks"

import { Link } from "gatsby"
import React from "react"

const IndexPage = ({ location }) => {
  const { description } = useSiteMetadata()
  const { edges } = useLatestPosts()

  return (
    <Layout location={location}>
      <article className="padding page container center">
        <SEO title="Home" />
        <div>
          {edges.map(edge => (
            <div key={edge.node.id} style={{ marginBottom: `var(--space-xl)` }}>
              <h2 className="title">
                <Link className="nav-link" to={edge.node.fields.slug}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p>{edge.node.frontmatter.description}</p>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default IndexPage
