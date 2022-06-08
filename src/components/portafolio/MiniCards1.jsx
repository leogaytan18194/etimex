import React from "react";
import styled from "styled-components";
import Taller from "../../img/mtto.png";

const Container = styled.div`
  width: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100px
  }
`;

const Image = styled.img`
  width: 40px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const MiniCards = () => {
  return (
    <Container>
      <Image src={Taller} />
      <Text>Mantenimientos preventivos</Text>
    </Container>
  );
};

export default MiniCards;