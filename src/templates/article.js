import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import {Container, Row, Col} from 'react-bootstrap'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <Container>
    <Img style={{ maxHeight: '400px' }} fluid={data.strapiArticle.picture.childImageSharp.fluid}/>
    <div className="px-4">
    <h1>{data.strapiArticle.title}</h1>
    <p>{data.strapiArticle.body}</p>
    </div>
    </Container>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      body
      picture {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
        }
    }
  }
`