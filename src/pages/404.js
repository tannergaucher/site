import { Layout, SEO } from "../components"

import React from "react"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <div className="container center padding">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
