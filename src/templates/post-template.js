import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, SEO } from "../components"

export default function PostTemplate({ data, pageContext, location }) {
  const { next, previous } = pageContext
  const post = data.mdx

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <div className="padding">
        <article
          className="page container card post-padding post"
          // Update container class in style system and remove
          style={{
            maxWidth: `var(--container)`,
            margin: `var(--space-lg) auto`,
          }}
        >
          {/* <time style={{ marginTop: `var(--space-sm)` }}>
          </time> */}
          <h1
            className="title text--xxxl"
            style={{
              marginTop: `var(--space-md)`,
              marginBottom: `var(--space-md)`,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p>{post.frontmatter.description}</p>
          <hr />
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <section
          style={{
            maxWidth: `var(--container)`,
            margin: `var(--space-xl) auto`,
          }}
        >
          {next && (
            <>
              <h4 className="next-prev">Next</h4>
              <Link to={next.fields.slug} className="nav-link">
                <h2 className="title next">{next.frontmatter.title}</h2>
              </Link>
            </>
          )}
          {previous && (
            <>
              <h4 className="next-prev">Previous</h4>
              <Link to={previous.fields.slug} className="nav-link">
                <h2 className="title prev">{previous.frontmatter.title}</h2>
              </Link>
            </>
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
