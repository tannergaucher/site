import Image from "gatsby-image"
import { Link } from "gatsby"
import React from "react"
import { useLatestMyImages } from "../hooks"

export default function LatestPhotosSection() {
  const { edges } = useLatestMyImages()

  return (
    <section className="padding">
      <hr />
      <Link to="/photos" className="nav-link">
        <h2>View All Photos &#8594;</h2>
      </Link>
      <div className="image-grid">
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`} key={edge.node.id}>
            <Image fluid={edge.node.myImage.asset.fluid} />
          </Link>
        ))}
      </div>
    </section>
  )
}
