import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/global/Navbar"
import Footer from "../components/global/footer"
import AltHero from "../components/homepage/althero"
import Intro from "../components/homepage/intro"
import CfBook1 from "../components/homepage/cfbook1"
import CfBook2 from "../components/homepage/cfbook2"
import CfBook3 from "../components/homepage/cfbook3"
import DDbook1 from "../components/homepage/ddbook1"
import Newsletter from "../components/homepage/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <AltHero />
    <Intro />
    <CfBook1 />
    <CfBook2 />
    <CfBook3 />
    <Newsletter />
    <DDbook1 />
    <Newsletter />
    <Footer />
  </Layout>
)

export default IndexPage
