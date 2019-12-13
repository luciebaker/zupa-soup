import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/global/Navbar"
import Footer from "../components/global/footer"
import Hero from "../components/homepage/hero"
import Intro from "../components/homepage/intro"
import Feature from "../components/homepage/feature"
import Easy from "../components/homepage/easy"
import Menu from "../components/homepage/menu"
import Value from "../components/homepage/value"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero />
    <Intro />
    <Feature />
    <Easy />
    <Menu />
    <Value />
    <Footer />
  </Layout>
)

export default IndexPage
