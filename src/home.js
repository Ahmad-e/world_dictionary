import Svg1 from './svgs/svg1';
import Svg2 from './svgs/svg2';
import Svg3 from './svgs/svg3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
const Home = () => {
    return (
      
        <Container className="mine_home_div">
          <br/>
          <Row className="home_div">
            <Col xs={12} md={7}><h5> <br/>You can search for information about countries like maps,flag and Population by entering the name of the country you want to travel to or want to search for it, just click <a className="button_" href='/search_by_countries'>countries search</a></h5></Col>
            <Col xs={12} md={4}><p><Svg1/></p></Col>
            
          </Row>
          <Row className="home_div">
            <Col  xs={12} md={7}><p><Svg2/></p></Col>
            <Col  xs={12} md={4}><h5><br/>You can also access the information like name of countries,maps,flag and Population by entering the name of the city or capital of the country that you want to search for, just click <a className="button_" href="/search_by_capital">capital search</a></h5>   </Col>
          </Row>
          <Row className="home_div">
            <Col xs={12} md={7}><h5><br/>If you are looking for a country that speaks a specific language, you can get information just you have to enter the language by click <a className="button_" href="/search_by_language">language search</a></h5>   </Col>
            <Col xs={12} md={4}> <p><Svg3/></p></Col>
          </Row>
        </Container>
      );
  };
  
  export default Home;