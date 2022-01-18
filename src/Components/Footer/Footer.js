import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GitHubButton from 'react-github-btn';

const Footer = () => {
    return (
        <footer className="pt-5">
            <Row className="d-flex flex-column justify-content-center align-items-center">
                <Col sm={4} md={4} lg={2} className="d-flex justify-content-evenly px-auto">
                    <Container>
                        <GitHubButton href="https://github.com/iftakherhossen" aria-label="Follow @iftakherhossen on GitHub">Follow Me</GitHubButton>
                        <GitHubButton href="https://github.com/iftakherhossen/tic-tac-toe" data-icon="octicon-star" aria-label="Star iftakherhossen/tic-tac-toe on GitHub">Star</GitHubButton>
                    </Container>
                </Col>
                <Col sm={12} md={9} lg={6} className="text-center mt-2">
                    <p>© 2022, All rights reserved By <a href="https://iftakher-hossen.vercel.app/" target="_blank" rel="noreferrer" className="coloredTxt text-decoration-none">Iftakher Hossen</a></p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;