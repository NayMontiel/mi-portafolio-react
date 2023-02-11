import React from "react";
import { CardsPortafolio } from "../components/CardsPortafolio";
import { Col, Container, Row } from "react-bootstrap";

export const Portafolio = () => {
  return (
    <>
      <Container className=" my-5">
        <Row className="portafolio g-0 px-4 mb-5 justify-content-center">
          <Col>
            <h2 className="titulo text-center py-5">Portafolio</h2>
            <CardsPortafolio />
          </Col>
        </Row>
      </Container>
    </>
  );
};
