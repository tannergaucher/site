import { graphql, useStaticQuery } from "gatsby"

export const useLatestProjects = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query USE_LATEST_PROJECTS {
        allMdx(
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
  return allMdx
}
