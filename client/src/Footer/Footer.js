import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "1rem",
        boxShadow: "0px 2px 6px 1px rgba(0, 0, 0, 1)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        &copy; Open Source 2021
      </div>
    </footer>
  );
}
