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
          keywords={[`blog`, `health`, `wellness`, `fitness`]}
        />
        <img style={{ margin: 0 }} src="./fitness-tracking-application.png" alt="optimization scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Conquer Peak Health. I help anyone realize their human potential (peak).</p>
        <p>
          This is a place where I, Coach Scott, share my learnings and help others like you reach their peak health.
          You can expect topics as they relate to health and wellness on:

          <br>Sport Psychology - Neuroscience - Mindset</br>
          <br>Fitness - Posture - Optimal human movement</br>
          <br>Injury Prevention</br>
          <br>Self Care - Healing</br>
          <br>Orthopedic Rehabilitation</br>
          <br>Epigenetics</br>
          <br>Debunking myths</br>
          <br>Proven techniques to heal yourself and others</br>
          <br>Real stories and so much more!</br>
          </p>

        <p>Let's go build something great and reach our peak!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
