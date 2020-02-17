import { Layout, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"

export default function PostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark

  const { next, previous } = pageContext

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <article className="padding page container">
        <h1 className="title">{post.frontmatter.title}</h1>
        <p style={{ color: `var(--grey)` }}>{post.frontmatter.description}</p>
        <time>
          <h3 className="text--md" style={{ marginTop: `var(--space-lg)` }}>
            {post.frontmatter.date}
          </h3>
        </time>
        <hr />
        <br />
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <br />
        <section>
          {next && (
            <>
              <small>Next</small>
              <Link to={next.fields.slug} className="nav-link">
                <h2 className="title">{next.frontmatter.title}</h2>
              </Link>
            </>
          )}
          {previous && (
            <>
              <small>Previous</small>
              <Link to={previous.fields.slug} className="nav-link">
                <h2 className="title">{previous.frontmatter.title}</h2>
              </Link>
            </>
          )}
        </section>
        <br />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
