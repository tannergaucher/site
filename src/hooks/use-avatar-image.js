import { useStaticQuery, graphql } from "gatsby"

export const useAvatarImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query AvatarImage {
        file(relativePath: { regex: "/avatar/" }) {
          childImageSharp {
            fixed(height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return file.childImageSharp
}
