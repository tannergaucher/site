import { useStaticQuery, graphql } from "gatsby"

export const useAllProjects = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query USE_ALL_PROJECTS {
        allMdx(
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
  return allMdx
}
