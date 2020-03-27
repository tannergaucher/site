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
      <article
        className="page padding container"
        // Update container class in style system and remove
        style={{
          maxWidth: `var(--container)`,
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <time>
          <small>{post.frontmatter.date}</small>
        </time>
        <h1
          className="title text--xxxl"
          style={{ margin: `var(--space-lg) 0` }}
        >
          {post.frontmatter.title}
        </h1>
        <p>{post.frontmatter.description}</p>
        <hr />
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />
        <br />
        <section>
          {next && (
            <>
              <h4 className="next-prev">Next</h4>
              <Link to={next.fields.slug} className="nav-link">
                <h2 className="title">{next.frontmatter.title}</h2>
              </Link>
            </>
          )}
          {previous && (
            <>
              <h4 className="next-prev">Previous</h4>
              <Link to={previous.fields.slug} className="nav-link">
                <h2 className="title">{previous.frontmatter.title}</h2>
              </Link>
            </>
          )}
          <br />
        </section>
        <br />
      </article>
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
