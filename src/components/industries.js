import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default () => ( <
    StaticQuery query = { graphql `
            query indQuery {
                allStrapiTest {
                    edges {
                      node {
                        subhead
                        heading
                        industries {
                          title
                          datauri
                          image {
                           base
                          }
                        }
                      }
                    }
                  }
            }
          ` }
    render = {
        data => data.allStrapiTest.edges.map(document => ( <
            Container fluid className = "bg-blob py-5" >
            <
            Container className = "text-center py-5 " >
            <
            h2 className = "pt-5 text-white" > { document.node.heading } < /h2> <
            h3 className = "text-light" > { document.node.subhead } < /h3> <
            Row className = "pt-5" > {
                document.node.industries.map(document => (

                    <
                    Col xs = "6"
                    md className = "py-4" >

                    <
                    img style = {
                        { width: '80px' }
                    }
                    className = " text-center m-auto"
                    src = { "" + document.datauri }
                    alt = "" / >
                    <
                    h4 class = "py-3 text-white" > { document.title } < /h4> < /
                    Col >

                ))
            } <
            /Row> < /
            Container > <
            /Container>
        ))
    }
    />
)