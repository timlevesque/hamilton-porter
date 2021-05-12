import React from "react"
import {StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {Col} from "react-bootstrap"

export default () => (
    <StaticQuery
          query={graphql`
            query personQuery {
              allStrapiPeople {
                edges {
                  node {
                    name
                    title
                    image{
                        childImageSharp {
                            fluid(maxHeight: 700) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                  }
                }
              }
            }
          `}
          render={data => data.allStrapiPeople.edges.map(document =>(
            <Col xs="6" lg="4" className="py-4 px-lg-5">
                <div className="text-center mt-5">
                <h3 className="text-white">{document.node.name}</h3>
                <Img fluid={document.node.image.childImageSharp.fluid} alt="" />
                    
                    <h4 className="text-light">{document.node.title}</h4>
                    
                </div>
                
                </Col>
            ))
          }
        />
    )
    
     