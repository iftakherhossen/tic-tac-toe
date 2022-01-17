import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="d-flex flex-column justify-content-center align-items-center pt-5">
            <h1>Tic Tac Toe</h1>
            <h5>By <a href="https://iftakher-hossen.vercel.app/" target="_blank" rel="noreferrer" className="coloredTxt text-decoration-none">Iftakher Hossen</a></h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;