/* eslint-disable react/jsx-key */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from 'react-router'


function SingleMovieFetch() {
    const {movid} = useParams();
    const [singledata, setSingleData]= useState([]);

    useEffect(() => {
        (async () =>{
        try {
            const response =await axios.get(`http://localhost:3000/movie/${movid}`);
            console.log(response);
            setSingleData(response.data);
        } catch (error) {
            console.error(error);
        }})();
      },[]);

      return (
        <div>
            <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                        <Col id={singledata._id} key={singledata._id} md={4} xs={6} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src={singledata.imageUrl} />
                            <Card.Body>
                            <Card.Title>{singledata.title}</Card.Title>
                            <Card.Text>
                            {singledata.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovieFetch;