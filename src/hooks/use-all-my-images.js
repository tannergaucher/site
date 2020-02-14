import { useStaticQuery, graphql } from "gatsby"

export const useAllMyImages = () => {
  const { allSanityMyImage } = useStaticQuery(
    graphql`
      query USE_ALL_MY_IMAGES {
        allSanityMyImage(sort: { fields: _createdAt, order: DESC }) {
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
