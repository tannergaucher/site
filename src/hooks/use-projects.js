import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_PROJECTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          sort: { fields: frontmatter___date, order: DESC }
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
