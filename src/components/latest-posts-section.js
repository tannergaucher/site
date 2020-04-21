import { Link } from "gatsby"
import { PostCard } from "../components"
import React from "react"
import { useLatestPosts } from "../hooks"

export default function LatestPostsSection() {
  const { edges } = useLatestPosts()

  return (
    <section className="padding">
      <hr />
      <Link to="/posts" className="nav-link animated-link">
        <h2>
          View All Posts <span className="animated">&#8594;</span>
        </h2>
      </Link>
      <div className="content-grid">
        {edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </div>
    </section>
  )
}
