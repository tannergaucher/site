import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          ...SiteMetadataFragment
        }
      }
    `
  )
  return site.siteMetadata
}
