import React from "react";
import styled from "styled-components";
import Seguro from "../../img/safety.png";

const Container = styled.div`
  width: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 480px) {
    width: 50px
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
      <Image src={Seguro} />
      <Text>Seguro de conductor privado</Text>
    </Container>
  );
};

export default MiniCards;