import React from "react"
import {StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {Container, Row, Col} from "react-bootstrap"
import Carousel from 'react-elastic-carousel';
import Slide from"../components/slider"

export default () => (
    <StaticQuery
          query={graphql`
            query candidatetestimonialQuery {
              allStrapiCandidateTestimonials {
                edges {
                  node {
                    id
                    heading
                    subhead
                    testimonials {
                      testimonial
                      author
                    }
                  }
                }
              }
            }
          `}
          render={data => data.allStrapiCandidateTestimonials.edges.map(document =>(
            <Container fluid className="bg-blob py-5">
            <Container className="py-5 position-relative">
                <div className="text-center mt-5">
                    <h2 className="text-white">{document.node.heading}</h2>
                    <h3 className="text-light">{document.node.subhead}</h3>
                </div>
                <Carousel itemsToShow={1}>
                {document.node.testimonials.map(document =>(
                  <Slide text={document.testimonial} author={document.author} company={document.company}/>
                ))}
                </Carousel>
                </Container>                
                </Container>

            ))
          }
        />
    )
    
     