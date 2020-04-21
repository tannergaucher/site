import { useStaticQuery, graphql } from "gatsby"

export const useAvatarImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query AvatarImage {
        file(relativePath: { regex: "/avatar/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return file.childImageSharp
}
