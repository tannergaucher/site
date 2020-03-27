import { useStaticQuery, graphql } from "gatsby"

export const useAllPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query USE_ALL_POSTS {
        allMdx(
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
  return allMdx
}
