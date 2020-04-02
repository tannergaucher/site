import React from "react"
import { graphql } from "gatsby"

import { Layout, PostCard } from "../components"

export default function TagTemplate({ pageContext, location, data }) {
  return (
    <Layout location={location}>
      <div className="padding page container">
        <h1 className="title">{pageContext.tag}</h1>
        <div className="content-grid">
          {data.allMdx.edges.map(edge => (
            <PostCard key={edge.node.id} post={edge.node} />
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
