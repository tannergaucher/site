import { useStaticQuery, graphql } from "gatsby"

export const useAllProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_ALL_PROJECTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          # CHANGE SORT BC PROJECTS ARENT GOING TO HAVE A FRONTMATTER.DATE
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
