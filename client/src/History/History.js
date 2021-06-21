import React from "react";
import { Container } from "react-bootstrap";
import "./History.css";

export default function History() {
  return (
    <section id="history">
      <Container>
        <div className="count">3</div>
        <div className="lastdays">TESTS TAKEN IN THE LAST 30 DAYS</div>
        <div className="description">
          This free personality test gives you accurate scores for the{" "}
          <strong>Big Five personality Traits</strong>. See exactly how you
          score for Openness, Conscientiousness, Extraversion, Agreeableness,
          and Neuroticism with this scientific{" "}
          <strong>personality assessment</strong>. To take the{" "}
          <strong>Big Five personality</strong> assessment, rate each statement
          according to how well it describes you. Base your ratings on how you
          really are, not how you would like to be.
        </div>
      </Container>
    </section>
  );
}
