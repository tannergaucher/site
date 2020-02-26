import { Layout, SEO } from "../components"

import { Link } from "gatsby"
import React from "react"

export default function PostTemplate({ data, pageContext, location }) {
  const { next, previous } = pageContext
  const post = data.markdownRemark

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      <article className="page container padding">
        <time>
          <small>{post.frontmatter.date}</small>
        </time>
        <h1
          className="title text--xxxl"
          style={{ margin: `var(--space-lg) 0` }}
        >
          {post.frontmatter.title}
        </h1>
        <h2 className="text--xxl">{post.frontmatter.description}</h2>
        <hr />
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
