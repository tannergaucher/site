import { Link } from "gatsby"
import { PostCard } from "../components"
import React from "react"
import { useLatestPosts } from "../hooks"

export default function LatestPostsSection() {
  const { edges } = useLatestPosts()

  return (
    <section className="container padding">
      <hr />
      <Link to="/posts" className="nav-link">
        <h2>Posts</h2>
      </Link>
      <div className="content-grid">
        {edges.map(edge => (
          <PostCard post={edge.node} />
        ))}
      </div>
    </section>
  )
}
