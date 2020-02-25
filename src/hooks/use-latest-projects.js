import { graphql, useStaticQuery } from "gatsby"

export const useLatestProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_LATEST_PROJECTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 5
        ) {
          edges {
            node {
              ...ProjectFragment
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
