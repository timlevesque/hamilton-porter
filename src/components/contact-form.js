import React from "react"
import {StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Container, Row, Col} from "react-bootstrap"

export default () => (
<Container className="text-center">
    <Col md="8" lg="6" className="m-auto">
<form className="form-group" action="https://getform.io/f/72be98bc-2cf0-40fb-8977-dc1106a8dcbf" method="POST">

  <input className="form-control my-3 p-4" type="text" placeholder="name" name="name"/>
  <input className="form-control my-3 p-4" type="email" placeholder="email" name="email"/>
  <textarea className="form-control my-3 p-4" type="text" placeholder="message" name="message"/>
  <button type="submit" className="font-weight-bold btn btn-primary my-3 px-5 py-3">SUBMIT</button>

</form>

<p className="font-weight-bold py-5"><a target="_blank" href="tel:949-478-2239">949-478-2239</a></p>
</Col>
</Container>
)
