import React from "react";
import "./TestTaken.css";
import { Container } from "react-bootstrap";

export default function TestTaken() {
  return (
    <section id="testtaken">
      <Container>
        <div className="wrapper">
          <div className="container">
            <div cols="12" className="row py-10">
              <div className="text-center col col-12">
                <h1 className="font-italic">
                  Over 700.000 people have taken the test
                </h1>
              </div>{" "}
              <div className="col">
                <div className="row">
                  <div xs="6" className="col-sm-6 col-md-4 col-6">
                    <img
                      alt="open source"
                      src="https://bigfive-test.com/_nuxt/img/047a6e7.png"
                      loading="lazy"
                      className="responsive taken_image"
                    />{" "}
                    <h3>Open</h3>{" "}
                    <span color="#666">
                      This is an open source project under MIT-license.
                    </span>
                  </div>{" "}
                  <div xs="6" className="col-sm-6 col-md-4 col-6">
                    <img
                      alt="free"
                      src="https://bigfive-test.com/_nuxt/img/ef0ed47.png"
                      loading="lazy"
                      className="responsive taken_image"
                    />{" "}
                    <h3>Free</h3>{" "}
                    <span color="#666">The test is completely free</span>
                  </div>{" "}
                  <div xs="6" className="col-sm-6 col-md-4 col-6">
                    <img
                      alt="scientific"
                      src="https://bigfive-test.com/_nuxt/img/42b4b27.png"
                      loading="lazy"
                      className="responsive taken_image"
                    />{" "}
                    <h3>Scientific</h3>{" "}
                    <span color="#666">
                      BigFive is a scientifically validated and reliable
                      psychological model.
                    </span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
