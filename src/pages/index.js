import React from "react"
import { Link, Item } from "react"
import {Container, Row, Col, Button} from "react-bootstrap"
import Layout from "../components/layout"
import Ind from "../components/industries"
import About from "../components/about"
import ClientList from "../components/clients"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Form from "../components/contact-form"



const IndexPage = ({ data }) => (
 
   <Layout >

<Container>
       {data.allStrapiHome.edges.map(document=>(
            <Row>
            <Col md={{ order: 'last' }}>
            <Img fluid={document.node.hero.childImageSharp.fluid} alt="" />
            </Col>
              <Col  xs="12" md="6" className="text-center text-md-left p-2 p-xl-5 align-self-center">
              <h1 className="text-center text-md-left">
                <p className="m-0 text-dark">{document.node.title}</p>
                <p className="m-0 text-light">{document.node.subtitle}</p></h1>
              <p className="text-center text-md-left">{document.node.description}</p>
              <div className="mt-5 pt-3 ">
              <Button variant="primary"  className=" p-3 font-weight-bold px-4 bg-orange" href={document.node.link}>
                  {document.node.button}
              </Button>
              </div>
            </Col>
        </Row>
       ))}
</Container>

  <Ind />
  <About />
  <ClientList />
  <Container className="py-5 my-5">
{data.allStrapiHome.edges.map(document=>(
  <Container id="contact" className="text-center">
<h2 className="text-dark">{document.node.contactheading}</h2>
<h4 className="text-light">{document.node.contactblurb}</h4>
</Container>
))}
<Form />
</Container>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql `
query MyQuery {
  allStrapiHome {
    edges {
      node {
        title
        subtitle
        description
        button
        link
        contactheading
        contactblurb
        hero {
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
`