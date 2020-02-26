import { Layout, PostCard, SEO } from "../components"

import React from "react"
import { useLatestPosts } from "../hooks"

export default function PostsPage({ location }) {
  const { edges } = useLatestPosts()

  return (
    <Layout location={location}>
      <article className="container page padding">
        <SEO title="Posts" />
        <div className="content-grid">
          {edges.map(edge => (
            <PostCard post={edge.node} />
          ))}
        </div>
      </article>
    </Layout>
  )
}
