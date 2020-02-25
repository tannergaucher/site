import { Link } from "gatsby"
import { PostCard } from "../components"
import React from "react"
import { kebabCase } from "lodash"
import { useLatestPosts } from "../hooks"

export default function LatestPostsSection() {
  const { edges } = useLatestPosts()

  return (
    <section className="padding">
      <div className="content-grid">
        {edges.map(edge => (
          <PostCard post={edge.node} />
        ))}
      </div>
      <br />
      <div className="container center">
        <Link className="nav-link" to="/posts">
          <h2>Posts &#8594;</h2>
        </Link>
      </div>
    </section>
  )
}
