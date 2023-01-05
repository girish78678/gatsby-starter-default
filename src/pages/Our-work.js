import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OurWork = () => (
  <Layout>
    <h1>Welcome to Our Work page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default OurWork