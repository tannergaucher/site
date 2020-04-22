import { useStaticQuery, graphql } from "gatsby"

export const useAvatarImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query AvatarImage {
        file(relativePath: { regex: "/avatar/" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return file.childImageSharp
}
