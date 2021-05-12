import React, {Component} from "react"
import {Container, Row, Col} from "react-bootstrap"
import Layout from "../components/layout"
import Values from "../components/values"
import ClientList from "../components/clients"
import Testimonials from "../components/testimonials"
import Form from "../components/contact-form"




const AboutPage = ({ data }) => (
 
   <Layout >
<Container>
       {data.allStrapiAboutPage.edges.map(document=>(
            <Row>
              <Col className="text-center py-5  align-self-center">
              <h1 className="text-center py-5">
                <p className="m-0 text-dark">{document.node.heading}</p>
                <p className="m-0 text-light">{document.node.subhead}</p></h1>

            </Col>
        </Row>
       ))}
</Container>
<Testimonials/>
<Values/>
<ClientList/>
<Container className="py-5 my-5">
{data.allStrapiAboutPage.edges.map(document=>(
  <Container className="text-center">
<h2 className="text-dark">{document.node.contactheading}</h2>
<h4 className="text-light">{document.node.contactblurb}</h4>
</Container>
))}
<Form />
</Container>


    </Layout>
)

export default AboutPage

export const pageQuery = graphql `
query aboutquery {
  allStrapiAboutPage {
    edges {
      node {
        subhead
        heading
        contactheading
        contactblurb
      }
    }
  }
}
`