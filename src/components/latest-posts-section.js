import { Link } from "gatsby"
import { PostCard } from "../components"
import React from "react"
import { useLatestPosts } from "../hooks"

export default function LatestPostsSection() {
  const { edges } = useLatestPosts()

  return (
    <section className="padding">
      <div className="container center">
        <hr />
        <Link to="/posts" className="nav-link">
          <h2 style={{ marginTop: `var(--space-xl)` }}>
            View All Posts &#8594;
          </h2>
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
