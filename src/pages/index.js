import React from "react"

import {
  ContactSection,
  LatestPhotosSection,
  LatestPostsSection,
  LatestProjectsSection,
  Layout,
  SEO,
} from "../components"

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
