import { Link } from "gatsby"
import { PostCard } from "../components"
import React from "react"
import { kebabCase } from "lodash"
import { useLatestPosts } from "../hooks"

export default function LatestPostsSection() {
  const { edges } = useLatestPosts()

  return (
    <section className="padding">
      <Link className="nav-link" to="/posts">
        <h2 className="text--xxl">
          Posts <span>&#8594;</span>
        </h2>
      </Link>
      <br />
      <div className="content-grid">
        {edges.map(edge => (
          <PostCard post={edge.node} />
        ))}
      </div>
      <br />
    </section>
  )
}
