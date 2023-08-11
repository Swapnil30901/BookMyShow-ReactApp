import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { useState, useEffect } from "react";

function AllMoviesFetch() {
    const [data, setData] = useState([]);

      useEffect(() => {
        (async () =>{
        try {
            const response =await axios.get('http://localhost:3000/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }})();
      }, []);
    
    return (
        <div>
            <Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov)=>
                        <Col onClick={()=>window.location.href="/movies/"+mov.id} id={mov.id} key={mov.id} md={4} xs={6} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                            <Card.Img variant="top" src={mov.imageUrl} />
                            <Card.Body>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                            {mov.actor}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default AllMoviesFetch;