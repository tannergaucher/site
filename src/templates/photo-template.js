import Img from "gatsby-image"
import { Layout } from "../components"
import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

export default function PhotoTemplate({ data, pageContext, location }) {
  const image = data.sanityMyImage

  console.log(image)

  const formatedDateTime = moment(
    image.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do, YYYY")

  return (
    <Layout location={location}>
      <article className="page container center">
        <figure className="figure">
          <Img fluid={image.myImage.asset.fluid} />
          <figcaption className="figcaption  only-mobile-padding">
            <time
              className="text--sm"
              style={{ color: `var(--grey)`, marginRight: `var(--space-sm)` }}
            >
              {formatedDateTime}.
            </time>
            <small className="text--sm">{image.caption}</small>
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
