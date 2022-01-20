import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";
import { GlobalStyle } from "./globalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 5px;
  border: none;
  background: #000000;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background: #fff;
    border: 2px solid #000000;
    color: #000000;
  }
`;

const Week9 = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>Find more</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </>
  );
};

export default Week9;
