import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Layout from "../components/layout"
import About from "../components/about"
import ClientList from "../components/clients"
import Testimonials from "../components/testimonials2"
import Form from "../components/contact-form"



const CandidatesPage = ({ data }) => (
 
<Layout>
<Container>
       {data.allStrapiCandidates.edges.map(document=>(
            <Row>
              <Col className="text-center py-5  align-self-center">
              <h1 className="text-center py-5">
                <p className="m-0 text-dark">{document.node.heading}</p>
                <p className="m-0 text-light">{document.node.subhead}</p></h1>

            </Col>
        </Row>
       ))}
</Container>
<Container fluid className="bg-blob">
</Container>
<Testimonials/>
<About/>
<ClientList/>
<Container className="py-5 my-5">
{data.allStrapiCandidates.edges.map(document=>(
  <Container className="text-center">
<h2 className="text-dark">{document.node.contactheading}</h2>
<h4 className="text-light">{document.node.contactblurb}</h4>
</Container>
))}
<Form />
</Container>
</Layout>

)

export default CandidatesPage

export const pageQuery = graphql `
query candidatesquery {
    allStrapiCandidates {
        edges {
          node {
            id
            subhead
            heading
            contactheading
            contactblurb
          }
        }
      }
}
`