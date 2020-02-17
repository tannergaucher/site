import { Layout } from "../components"
import { Link } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"

export default function TagTemplate({ pageContext, location, data }) {
  return (
    <Layout location={location}>
      <div className="padding">
        <h1>{pageContext.tag}</h1>
        <div className="content-grid">
          {data.allMarkdownRemark.edges.map(edge => (
            <div key={edge.node.id} className="card">
              <h2 className="card-title">{edge.node.frontmatter.title}</h2>
              <p className="card-text">{edge.node.frontmatter.description}</p>
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
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { tags: { in: $tag } }
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
