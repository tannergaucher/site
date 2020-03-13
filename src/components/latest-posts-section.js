import { Link } from "gatsby"
import { PostCard } from "../components"
import React from "react"
import { useLatestPosts } from "../hooks"

export default function LatestPostsSection() {
  const { edges } = useLatestPosts()

  return (
    <section className="container padding">
      <hr />
      <div
        className="scroll-margin-top"
        style={{
          position: `sticky`,
          top: `0`,
          background: `var(--bg-1)`,
        }}
      >
        <Link to="/posts" className="nav-link">
          <h2>View All Posts</h2>
        </Link>
      </div>
      <div className="content-grid">
        {edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </div>
    </section>
  )
}
