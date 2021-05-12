import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Img from "gatsby-image";
const slider = ({company, text, author}) =>(
<Row className="">
    <Col className=" tetext-whi text-center align-self-center py-5">
        <h4 className="text-white pb-4">{text}</h4>
        <h6 className="text-light">{author}</h6>
        <div className="p-3">
        <Img style={{ maxWidth: '80px' }} className="blend-img text-center m-auto" fluid={company} alt=""/>
        </div>
        
    
</Col>
</Row>
);

export default slider;