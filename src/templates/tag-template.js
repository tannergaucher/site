import { Layout } from "../components"
import { Link, graphql } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"

export default function TagTemplate({ pageContext, location, data }) {
  return (
    <Layout location={location}>
      <div className="padding page container">
        <h1 className="title">{pageContext.tag}</h1>
        <div className="content-grid">
          {data.allMdx.edges.map(edge => (
            <div key={edge.node.id} className="card">
              <Link className="nav-link" to={`/${edge.node.fields.slug}`}>
                <h2 className="card-heading title">
                  {edge.node.frontmatter.title}
                </h2>
                <p className="card-text">{edge.node.frontmatter.description}</p>
              </Link>
              <div className="card-text">
                {edge.node.frontmatter.tags.map(tag => (
                  <Link
                    to={`/posts/${kebabCase(tag)}`}
                    key={tag}
                    className="nav-link"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPageQuery($tag: [String]!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { tags: { in: $tag }, draft: { eq: false } }
      }
    ) {
      edges {
        node {
          ...PostFragment
        }
      }
    }
  }
`
