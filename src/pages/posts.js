import { Layout, PostCard, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"
import { kebabCase } from "lodash"
import { useLatestPosts } from "../hooks"

export default function PostsPage({ location }) {
  const { edges } = useLatestPosts()

  return (
    <Layout location={location}>
      <article className="padding page">
        <SEO title="Posts" />
        <h1 className="text--xxxl">Posts</h1>
        <div className="content-grid">
          {edges.map(edge => (
            <PostCard post={edge.node} />
          ))}
        </div>
      </article>
    </Layout>
  )
}
