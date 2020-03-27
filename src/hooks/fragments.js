import { graphql } from "gatsby"

export const POST_FRAGMENT = graphql`
  fragment PostFragment on Mdx {
    id
    excerpt
    timeToRead
    body
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
      tags
    }
  }
`

export const PROJECT_FRAGMENT = graphql`
  fragment ProjectFragment on Mdx {
    id
    frontmatter {
      title
      description
      uses
      deployedUrl
      vimeoUrl
      githubRepo
    }
  }
`

export const MY_IMAGE_FRAGMENT = graphql`
  fragment MyImageFragment on SanityMyImage {
    id
    slug {
      current
    }
    caption
    myImage {
      asset {
        _rawMetadata
        fluid(maxWidth: 1000) {
          ...GatsbySanityImageFluid_withWebp
        }
        metadata {
          location {
            lat
            lng
          }
        }
      }
    }
    tags {
      tag
      slug {
        current
      }
    }
  }
`

export const SiteInformation = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
      author
      social {
        github
        linkedIn
      }
    }
  }
`
