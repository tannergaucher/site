import { Layout, PostCard, SEO } from "../components"

import React from "react"
import { useAllPosts } from "../hooks"

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      <article className="page padding container">
        <SEO title="Posts" />
        <h1 className="text--xxxl page-title">Posts</h1>
        <div className="content-grid">
          {edges.map(edge => (
            <PostCard post={edge.node} key={edge.node.id} />
          ))}
        </div>
      </article>
    </Layout>
  )
}
