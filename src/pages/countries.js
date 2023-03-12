import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotFound from '../svgs/notfound';
import Search from '../svgs/search';

const Countries = () => {
  const [feach ,setFeach] =React.useState(false);
  const [count ,setCount] =React.useState("");
  const [post, setPost] = React.useState(null);
  function search(){
        setFeach(true);
        try{
          axios.get("https://restcountries.com/v2/name/"+count).then((response) => {
            setPost(response.data);
          }); 
          setPost(null);
        }catch(err){
          
        }
  }
 
 
      if (!feach) 
          return (
            <Container className="form_">
            <Row>
              <h4>Enter the name of the country or name abbreviation of the country in English only</h4><br/><br/><br/>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={12} md={8} lg={6}>
              <InputGroup size="lg" className="mb-3">
                <Form.Control
                  id="text"
                  placeholder=" Enter countrie name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={e=>setCount(e.target.value)}
                />
                <Button onClick={()=>search()} variant="outline-dark" id="button-addon2">
                  <Search height="5px" />
                </Button>
              </InputGroup>
              </Col>
              
            </Row>
          </Container>
          );
         
          if(post===null)
            return (
              <Container className="form_">
                <Row className="justify-content-md-center">
                  <Col sm={12} md={8} lg={6}>
                  <InputGroup size="lg" className="mb-3">
                    <Form.Control
                      id="text"
                      placeholder=" Enter countrie name"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={e=>setCount(e.target.value)}
                    />
                    <Button onClick={()=>search()} variant="outline-dark" id="button-addon2">
                      <Search height="5px" />
                    </Button>
                  </InputGroup>
                  </Col> 
                </Row>
                <Row>
                  <Col>
                    <NotFound />
                  </Col>
                </Row>
                
              </Container>
              );




          return (
            <Container className="form_">
              <Row className="justify-content-md-center">
                <Col sm={12} md={8} lg={6}>
                <InputGroup size="lg" className="mb-3">
                  <Form.Control
                    id="text"
                    placeholder=" Enter countrie name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={e=>setCount(e.target.value)}
                  />
                  <Button onClick={()=>search()} variant="outline-dark" id="button-addon2">
                    <Search height="5px" />
                  </Button>
                </InputGroup>
                </Col> 
              </Row>
              {
              post.slice(0, 8).map((item)=>
              <Row className="con">
                <Col md={12} lg={6}>
                  <div className="div1">
                    <h3> full name : {item.name}</h3>
                    <h3>  nativeName : {item.nativeName}</h3>
                    <h4> capital : {item.capital}</h4>
                    <h4> region : {item.region}</h4>
                    <h4> subregion : {item.subregion}</h4>
                    <h4> population : {item.population}</h4>
                    <h4> timezones : {item.timezones}</h4>
                    <h4> demonym : {item.demonym}</h4>
                  </div>
                  <div className="div2">
                    <h3> languages : {item.languages[0].nativeName} , {item.languages[0].name}</h3>
                    <h3> currencies : {item.currencies[0].name} ( {item.currencies[0].symbol} )</h3>
                  </div>
                </Col>
                <Col md={12} lg={6} >
                  <div className="div3"><img src={item.flag} /></div>
                  <div className="div4">
                      <iframe width="100%" height="300px" src={"https://maps.google.com/maps?q="+item.demonym+"&t=&z=5&ie=UTF8&iwloc=&output=embed" } 
                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                  </div>
                </Col>
              </Row>
              
              )
              
            }
            </Container>
            );      
  };
  
  export default Countries;