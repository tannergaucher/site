import {
  ContactSection,
  LatestPhotosSection,
  LatestPostsSection,
  LatestProjectsSection,
  Layout,
  SEO,
} from "../components"

import React from "react"

export default function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <article className="container">
        <SEO title="Home" />
        <LatestPostsSection />
        <br />
        <LatestProjectsSection />
        <br />
        <LatestPhotosSection />
        <br />
        <ContactSection />
        <br />
      </article>
    </Layout>
  )
}
