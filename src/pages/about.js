import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import Layout from "../components/layout"
import Values from "../components/values"
import People from "../components/people"
import Ind from "../components/industries"
import Form from "../components/contact-form"
import GhostWriter from '../components/typing'


const phrases=[
  " Software Engineers",
  " Senior DevOps Engineers",
  " Affiliate Marketing Managers",
  " Mortgage Underwriters",
  " Sales Development Managers",
  " Account Executives",
  " Sales Managers",
  " Data Scientists",
  " Loan Processors",
  " Engineering Managers"
];


const ClientsPage = ({ data }) => (
 
   <Layout>

<Container>
{/*        {data.allStrapiClients.edges.map(document=>(
            <Row>
              <Col className="text-center py-5  align-self-center">
              <h1 className="text-center py-5">
                <p className="m-0 text-dark">{document.node.heading}</p>
                <p className="m-0 text-light">{document.node.subhead}</p></h1>

            </Col>
        </Row>
       ))} */}

  <div className="py-5 my-5 text-center text-dark ">
    <h1>Hey There!</h1>
    <h2 className="text-dark">
    We are Actively Recruiting <br/>
      <span className="text-light"><GhostWriter phrases={phrases} typeInterval={40} pauseInterval={800} />&nbsp;</span>
    </h2>
  </div>

</Container>
<Container fluid className="py-5 bg-blob">
    <Container>
      <Row className=" py-5 justify-content-center">
    <People/>
    </Row>
    </Container>
</Container>
<Values/>
<Ind/>
<Container className="py-5 my-5">
{data.allStrapiClients.edges.map(document=>(
  <Container className="text-center">
<h2 className="text-dark">{document.node.contactheading}</h2>
<h4 className="text-light">{document.node.contactblurb}</h4>
</Container>
))}
<Form />
</Container>
    </Layout>

)

export default ClientsPage

export const pageQuery = graphql `
query clientsquery {
    allStrapiClients {
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