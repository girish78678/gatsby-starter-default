import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Awards = () => (
  <Layout>
    <h1>Welcome to the Awards Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Awards
