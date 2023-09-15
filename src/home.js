import Svg1 from './svgs/svg1';
import Svg2 from './svgs/svg2';
import Svg3 from './svgs/svg3';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


const Home = () => {

  return(
    <div className='home'>

      { /* start section */ }
    <Container className="section pt-5" >
      <div className="row mt-5 mb-5 d-flex align-items-center text-lg-start">
        <div className="box col-lg-4">
          <h1>INFORMATION ABOUT COUNTRIES </h1>
          <p className="opacity-75 mt-4 fs-5">You can search for information about countries like maps,flag and Population by entering the name of the country you want to travel to or want to search for it</p>
          <div className="mt-5 mb-5">
          <Button variant="outline-primary" href='/search_by_countries' > Countries search </Button>
          </div>
        </div>
        <div className="img-fluid col-lg-8 d-none d-md-block">
        <Svg1/>
        </div>
      </div>
    </Container>
    <Container className="section pt-5" >
      <div className="row mt-5 mb-5 d-flex align-items-center text-lg-start">
      <div className="img-fluid col-lg-8 d-none d-md-block">
        <Svg2/>
        </div>
        <div className="box col-lg-4">
          <h1>INFORMATION ABOUT CITIES</h1>
          <p className="opacity-75 mt-4 fs-5">You can also access the information like name of countries,maps,flag and Population by entering the name of the city or capital of the country that you want to search for </p>
          <div className="mt-5 mb-5">
          <Button variant="outline-primary" href="/search_by_capital"> Capital search </Button>
          </div>
        </div>
        
      </div>
    </Container>
    <Container className="section pt-5" >
      <div className="row mt-5 mb-5 d-flex align-items-center text-lg-start">
        <div className="box col-lg-4">
          <h1>INFORMATION ABOUT COUNTRIES BY LANGUAGE</h1>
          <p className="opacity-75 mt-4 fs-5">  search for a country that speaks a specific language, you can get information about this countries </p>
          <div className="mt-5 mb-5">
          <Button variant="outline-primary" href="/search_by_language" > Language search </Button>
          </div>
        </div>
        <div className="img-fluid col-lg-8 d-none d-md-block">
        <Svg3/>
        </div>
      </div>
    </Container>

</div>
  );

    /*return (
      
        <Container className="mine_home_div">
          <br/>
          <Row >
            <Col xs={12} md={7}><h5> <br/>You can search for information about countries like maps,flag and Population by entering the name of the country you want to travel to or want to search for it, just click <a className="button_" href='/search_by_countries'>countries search</a></h5></Col>
            <Col xs={12} md={4}><p><Svg1/></p></Col>
            
          </Row>
          <Row >
            <Col  xs={12} md={7}><p><Svg2/></p></Col>
            <Col  xs={12} md={4}><h5><br/>You can also access the information like name of countries,maps,flag and Population by entering the name of the city or capital of the country that you want to search for, just click <a className="button_" href="/search_by_capital">capital search</a></h5>   </Col>
          </Row>
          <Row >
            <Col xs={12} md={7}><h5><br/>If you are looking for a country that speaks a specific language, you can get information just you have to enter the language by click <a className="button_" href="/search_by_language">language search</a></h5>   </Col>
            <Col xs={12} md={4}> <p><Svg3/></p></Col>
          </Row>
           </Container>
      );*/
  };
  
  export default Home;