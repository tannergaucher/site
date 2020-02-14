import { Layout, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"

export default function PostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark

  const { next, previous } = pageContext

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <article className="padding page container center">
        <h1 className="title">{post.frontmatter.title}</h1>
        <h2 className="text--md" style={{ fontWeight: `400` }}>
          {post.frontmatter.description}
        </h2>
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
        <div style={{ margin: `var(--space-xl) 0` }}>
          {next && (
            <>
              <small>Next</small>
              <Link to={next.fields.slug} className="nav-link">
                <h3 className="title">{next.frontmatter.title}</h3>
              </Link>
            </>
          )}

          {previous && (
            <>
              <small>Previous</small>
              <Link to={previous.fields.slug} className="nav-link">
                <h3 className="title">{previous.frontmatter.title}</h3>
              </Link>
            </>
          )}
        </div>
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
