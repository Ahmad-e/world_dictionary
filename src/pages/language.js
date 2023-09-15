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
import Search from '../svgs/search'
import Load from './load';
const Language = () => {

  const [feach ,setFeach] =React.useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [cap, setCap] = useState(null);

  function handleClick() {
    setLoading(true);
    setFeach(1);
    try {
      axios.get("https://restcountries.com/v3.1/lang/"+cap).then((response) => {
        console.log(response.data[0].name.official)
        setData(response.data);}); 
      setData(null);
    } catch (err) {
        console.log(err.message);
    }
    setLoading(false);
}

  if(!data && feach===1)
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
          <Row className="justify-content-center" >
                    {
                      data.map((item)=>{
                        if(item.name.official!=="State of Israel")
                        return(
                        <Col  md={12} lg={6}>
                          <div className="div2 divL" >
                            <h3> Countrie : {item.name.official} </h3>
                            <h3> Native name : {item.translations.ara.common} </h3>
                            <h4> capital : {item.capital} </h4> 
                            <h4> languages : {item.languages[Object.keys(item.languages)[0]]} </h4>
                            <h4> region : {item.region} </h4>
                            <h4> subregion : {item.subregion} </h4>
                            <h4> population : {item.population} </h4>
                            <div className="div2"><img src={item.flags.png} /></div>
                          </div>
                        </Col>
                        )}
                        )
                    }       
          </Row>
        </Container>
        );
      if(feach===0)
        return (
          <Container className="form_">
            <Load run={loading} />
          <Row>
            <h4>Enter the language using English</h4><br/><br/><br/>
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
    
  };
  
  export default Language;