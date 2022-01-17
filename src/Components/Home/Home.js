import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Header />
                        <Main />
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;