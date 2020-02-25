import {
  Bio,
  ContactSection,
  LatestPhotosSection,
  LatestPostsSection,
  LatestProjectsSection,
  Layout,
  SEO,
} from "../components"

import React from "react"

const Hr = () => <hr style={{ margin: `var(--space-xl) var(--space-sm)` }} />

export default function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <article>
        <SEO title="Home" />
        <Bio />
        <Hr />
        <LatestPostsSection />
        <Hr />
        <LatestProjectsSection />
        <Hr />
        <LatestPhotosSection />
        <Hr />
        <ContactSection />
        <br />
      </article>
    </Layout>
  )
}
