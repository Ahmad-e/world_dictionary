import React , {useEffect,useState}  from "react";
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
import Load from './load';

const Capital = () => {

  const [feach ,setFeach] =React.useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [cap, setCap] = useState(null);

  
  function handleClick() {
    setLoading(true);
    setFeach(1);
    try {
      axios.get("https://restcountries.com/v2/capital/"+cap).then((response) => {
        setData(response.data);}); 
        setData(null);
        setLoading(false);
    } catch (err) {
        console.log("tesst");
        setData(null);
        setLoading(false);
    }
}

      if(feach===0)
        return (
          <Container className="form_">
            <Load run={loading} />
          <Row>
            <h4>Enter the name of the capital in English only</h4><br/><br/><br/>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
            <InputGroup size="lg" className="mb-3">
              <Form.Control
                id="text"
                placeholder=" Enter countrie name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e=>setCap(e.target.value)}
              />
              <Button onClick={()=>handleClick()}  variant="outline-primary" id="button-addon2">
               <Search height="5px" />
              </Button>
            </InputGroup>
            </Col>
          </Row>
        </Container>
        );



  if(data===null)
    return (
      <Container className="form_">
        <Load run={loading} />
      <Row className="justify-content-center">
        <Col sm={12} md={8} lg={6}>
        <InputGroup size="lg" className="mb-3">
          <Form.Control
            id="text"
            placeholder=" Enter countrie name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e=>setCap(e.target.value)}
          />
          <Button onClick={()=>handleClick()}  variant="outline-primary" id="button-addon2">
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


      if(feach===1)
        return (
          <Container className="form_">
            <Load run={loading} />
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={6}>
            <InputGroup size="lg" className="mb-3">
              <Form.Control
                id="text"
                placeholder=" Enter countrie name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={e=>setCap(e.target.value)}
              />
              <Button onClick={()=>handleClick()}  variant="outline-primary" id="button-addon2">
                <Search height="5px" />
              </Button>
            </InputGroup>
            </Col>
            </Row>

            {
            data.slice(0, 8).map((item)=>
            {
              if(item.capital!=="Jerusalem")
            return(
            <Row className="con" >
                <Col md={12} lg={6}>
                  <div className="div1">
                    <h3> capital : {item.capital}</h3>
                    <h3> Countrie name : {item.name}</h3>
                    <h4> Native Name : {item.nativeName}</h4>
                    <h4> region : {item.region}</h4>
                    <h4> subregion : {item.subregion}</h4>
                    <h4> population : {item.population}</h4>
                    <h4> timezones : {item.timezones}</h4>
                    
                  </div>
                  <div className="div2">
                    <h4> languages : {item.languages[0].name} , {item.languages[0].name}</h4>
                    <h4> currencies : {item.currencies[0].name}({item.currencies[0].symbol})</h4>
                  </div>
                </Col>
                <Col md={12} lg={6} >
                  <div className="div3"><img src={item.flag} /></div>
                  <div className="div4">
                    
                  <iframe width="100%" height="300px" src={"https://maps.google.com/maps?q="+item.capital+"&t=&z=8&ie=UTF8&iwloc=&output=embed" } 
                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    </iframe>
                  </div>
                </Col>
              </Row>)
              }
              )
            }
        </Container>
        );
      
    
  };
  
  export default Capital;