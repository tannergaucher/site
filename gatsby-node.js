const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { kebabCase } = require(`lodash`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allPostsQuery = await graphql(`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          frontmatter: { draft: { eq: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            id
            frontmatter {
              title
              description
            }
            fields {
              slug
            }
          }
          previous {
            id
            frontmatter {
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allPostsQuery.data.allMdx.edges.forEach(edge => {
    // Create post pages.
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        slug: edge.node.fields.slug,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })

  // Query all images from sanity cms.
  const allMyImagesQuery = await graphql(`
    query {
      allSanityMyImage(
        sort: { fields: myImage___asset____createdAt, order: DESC }
      ) {
        edges {
          node {
            slug {
              current
            }
          }
          next {
            slug {
              current
            }
          }
          previous {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // Create page for each image.
  allMyImagesQuery.data.allSanityMyImage.edges.forEach(edge => {
    createPage({
      path: `/photo/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/photo-template.js`),
      context: {
        slug: edge.node.slug.current,
        next: edge.next,
        previous: edge.previous,
      },
    })
  })

  const allTagsQuery = await graphql(`
    query {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          frontmatter: { draft: { eq: false } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const uniqueTags = allTagsQuery.data.allMdx.group

  uniqueTags.forEach(uniqueTag => {
    createPage({
      path: `/posts/${kebabCase(uniqueTag.fieldValue)}`,
      component: path.resolve(`./src/templates/tag-template.js`),
      context: {
        tag: uniqueTag.fieldValue,
      },
    })
  })
}

// Default frontmatter.draft to false, so posts that are not drafts don't need a draft field

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, _args, _context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
    }
  `)
}
