import { graphql, useStaticQuery } from "gatsby"

export const useLatestMyImages = () => {
  const { allSanityMyImage } = useStaticQuery(
    graphql`
      query USE_LATEST_MY_IMAGES {
        allSanityMyImage(sort: { fields: _createdAt, order: DESC }, limit: 9) {
          edges {
            node {
              ...MyImageFragment
            }
          }
        }
      }
    `
  )
  return allSanityMyImage
}
