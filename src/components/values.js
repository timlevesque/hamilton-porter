import React from "react"
import {StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {Container, Row, Col} from "react-bootstrap"

export default () => (
    <StaticQuery
          query={graphql`
            query valueQuery {
                allStrapiValueSpot {
                    edges {
                      node {
                        subhead
                        heading
                        values {
                          heading
                          subhead
                          description
                          link
                          image {
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
          render={data => data.allStrapiValueSpot.edges.map(document =>(
            <Container className="py-5 ">
                <div className="text-center mt-5">
                    <h2 className="text-dark">{document.node.heading}</h2>
                    <h3 className="text-light">{document.node.subhead}</h3>
                    
                </div>
                {document.node.values.map(document =>(
                    <Row className="alt-order py-5 py-md-2">
                    <Col  className="align-self-center">
                    <Img className="m-auto" fluid={document.image.childImageSharp.fluid} alt=""/>
                    </Col>
                    <Col xs="12" lg="5" className="align-self-center px-5 px-md-3">
                    <h2 className="text-dark m-0">{document.heading}</h2>
                    <h2 className="text-light m-0">{document.subhead}</h2>
                    <p className="py-3">{document.description}</p>
                    {document.link ? <Link className="py-5 font-weight-bold" to={document.link}>Learn More &rarr;</Link> :''}
                    
                    </Col>
                    </Row>

                ))}
                
                </Container>
            ))
          }
        />
    )
    
     