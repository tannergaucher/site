import { graphql, useStaticQuery } from "gatsby"

export const useLatestPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_LATEST_POSTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 6
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
