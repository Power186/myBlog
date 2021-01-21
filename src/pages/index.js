import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Conquer Peak Health today"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `health`, `conquer`, `fitness`, `wellness`, `iOS`]}
        />
        <img style={{ margin: 0 }} src="./fitness-tracking-application.png" alt="optimization scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Conquer Peak Health. I create exceptional and creative iOS apps. <a href="https://power186.github.io/newestPortfolio/" rel="noreferrer" target="_blank">Who am I?</a></p>
        <p>
          I'm Scott! An LMT & iOS Engineer. Here I will share my 12+ years of experience healing others and provide info on my latest iOS and watchOS apps.
          You can expect demystified topics as they relate to: </p>

        <p>Sport Psychology - iOS apps - Mindset -
          Fitness - Posture - Optimal Human Movement - Injury Prevention - Self Care / Healing -
          Epigenetics -
          Debunking myths - Proven techniques to heal yourself and others -
          Real stories and so much more!</p>  

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
