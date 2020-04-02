import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { Layout, SEO } from "../components"

export default function PostTemplate({ data, pageContext, location }) {
  const { next, previous } = pageContext
  const post = data.mdx

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <div className="padding">
        <article className="page card container post">
          <Img
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            className="card-image"
          />
          <div className="padding container">
            <h1
              className="title card-title text--xxxl"
              style={{
                marginTop: `var(--space-lg)`,
                marginBottom: `var(--space-lg)`,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <h2
              style={{
                color: `var(--grey)`,
              }}
            >
              {post.frontmatter.description}
            </h2>
            <hr />
            <div className="post-body">
              <MDXRenderer>{post.body}</MDXRenderer>
            </div>
          </div>
        </article>
        <section
          className="container"
          style={{
            marginTop: `var(--space-lg)`,
            marginBottom: `var(--space-lg)`,
          }}
        >
          {next && (
            <Link to={next.fields.slug} className="nav-link">
              <div className="container">
                <h4>Next</h4>
                <h2 className="title">{next.frontmatter.title}</h2>
              </div>
            </Link>
          )}
          <div
            style={{ margin: `${next && previous && `var(--space-md) 0`}` }}
          />
          {previous && (
            <Link to={previous.fields.slug} className="nav-link">
              <div className="container">
                <h4>Previous</h4>
                <h2 className="title">{previous.frontmatter.title}</h2>
              </div>
            </Link>
          )}
          <br />
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
