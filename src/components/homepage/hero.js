import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


export default function hero() {
    return (
        <StaticQuery
        query={graphql `
            {
                mainImage: file(relativePath: {eq: "soup.png"}) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render = {data => {
            const mainImage = data.mainImage.childImageSharp.fluid
            return (
            <div className="container-fluid container-hero">
                <Img className="hero-img" fluid={mainImage} />
            </div>
            )
        }}
        />
    )
}
