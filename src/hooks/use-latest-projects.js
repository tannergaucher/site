import { graphql, useStaticQuery } from "gatsby"

export const useLatestProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_LATEST_PROJECTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          limit: 6
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
