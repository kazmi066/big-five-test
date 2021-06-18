import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./MainHeading.css";

export default function MainHeading() {
  return (
    <main id="mainheading">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6} xs={12}>
            <h1 className="title">The Big Five Personality Test</h1>
            <hr style={{ width: "5rem", borderTop: "4px solid black" }} />
            <h4 className="description">
              Accurately Measure Your Key Personality Traits{" "}
            </h4>
          </Col>
          <Col md={6} xs={12}>
            <img
              src="https://d31u95r9ywbjex.cloudfront.net/sites/default/files/styles/original/public/test_images/test-hero-big5.png?itok=9VdlQom2"
              alt="not found"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
