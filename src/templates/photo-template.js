import Img from "gatsby-image"
import { Layout } from "../components"
import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

export default function PhotoTemplate({ data, pageContext, location }) {
  const image = data.sanityMyImage

  const formatedDateTime = moment(
    image.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do, YYYY")

  return (
    <Layout location={location}>
      <article className="page container center">
        <figure className="figure">
          <Img
            fluid={image.myImage.asset.fluid}
            style={{ boxShadow: `var(--elevation-3)` }}
          />
          <figcaption className="figcaption  only-mobile-padding">
            <time
              style={{ color: `var(--grey)`, marginRight: `var(--space-sm)` }}
            >
              <small> {formatedDateTime}.</small>
            </time>
            <small style={{ color: `var(--grey)` }}>{image.caption}</small>
          </figcaption>
        </figure>
      </article>
    </Layout>
  )
}

export const PHOTO_QUERY = graphql`
  query PHOTO_QUERY($slug: String!) {
    sanityMyImage(slug: { current: { eq: $slug } }) {
      ...MyImageFragment
    }
  }
`