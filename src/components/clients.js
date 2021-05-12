import React from "react"
import {StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Container, Row, Col} from "react-bootstrap"

export default () => (
    <StaticQuery
          query={graphql`
            query logoQuery {
                allStrapiLogos {
                    edges {
                      node {
                        heading
                        subhead
                        client_lists {
                          company
                          logo {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                      }
                    }
                  }
            }
          `}
          render={data => data.allStrapiLogos.edges.map(document =>(
            <Container fluid className="bg-blob2">
            <Container className="text-center py-5">
              <div className="py-5">
                <h2 className="text-white pt-5">{document.node.heading}</h2>
                <h3 className="text-light">{document.node.subhead}</h3>
                </div>
                <Row className="pb-5">

                {document.node.client_lists.map(document =>(
                    
                    <Col xs="4" md="3" className="pb-5 align-self-center">
                    <Img style={{ maxWidth: '130px' }} className="blend-img text-center m-auto" fluid={document.logo.childImageSharp.fluid} alt=""/>
                    </Col>
                    

                ))}

                </Row>
                </Container>
                </Container>
            ))
          }
        />
    )
    
     