import { Layout, PostCard, SEO } from "../components"

import React from "react"
import { useLatestPosts } from "../hooks"

export default function PostsPage({ location }) {
  const { edges } = useLatestPosts()

  return (
    <Layout location={location}>
      <article className="container page padding">
        <SEO title="Posts" />
        <h1 className="title text--xxxl">Posts</h1>
        <div className="content-grid">
          {edges.map(edge => (
            <PostCard post={edge.node} key={edge.node.id} />
          ))}
        </div>
      </article>
    </Layout>
  )
}
