import { useStaticQuery, graphql } from "gatsby"

export const useAllPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_ALL_POSTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              ...PostFragment
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
