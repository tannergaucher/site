import { graphql, useStaticQuery } from "gatsby"

export const useLatestPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query USE_LATEST_POSTS {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/posts/" }
            frontmatter: { draft: { eq: false } }
          }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 5
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
  return allMdx
}
