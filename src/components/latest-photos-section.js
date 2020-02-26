import Image from "gatsby-image"
import { Link } from "gatsby"
import React from "react"
import { useLatestMyImages } from "../hooks"

export default function LatestPhotosSection() {
  const { edges } = useLatestMyImages()

  return (
    <section className="only-fullscreen-padding">
      <Link to="/photos" className="nav-link">
        <h2 className="text--xxl padding">Photos &#8594;</h2>
      </Link>
      <div className="image-grid">
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`}>
            <Image fluid={edge.node.myImage.asset.fluid} />
          </Link>
        ))}
      </div>
      <br />
    </section>
  )
}
