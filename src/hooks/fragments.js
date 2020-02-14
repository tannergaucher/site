import { graphql } from "gatsby"

export const POST_FRAGMENT = graphql`
  fragment PostFragment on MarkdownRemark {
    id
    excerpt
    html
    timeToRead
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      description
      tags
    }
    fields {
      slug
    }
  }
`

export const PROJECT_FRAGMENT = graphql`
  fragment ProjectFragment on MarkdownRemark {
    id
    frontmatter {
      title
      description
      deployedUrl
      vimeoUrl
      githubRepo
    }
    fields {
      slug
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
