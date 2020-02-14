import Img from "gatsby-image"
import { Layout } from "../components"
import { Link } from "gatsby"
import React from "react"
import { useAllMyImages } from "../hooks"

export default function PhotoPage({ location }) {
  const { edges } = useAllMyImages()

  return (
    <Layout location={location}>
      <div className="page image-grid only-fullscreen-padding">
        {/* Wrapping Img in a parent element, IE <Link/> causes it to not fill grid. */}
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`}>
            <Img key={edge.node.id} fluid={edge.node.myImage.asset.fluid} />
          </Link>
        ))}
      </div>
    </Layout>
  )
}
