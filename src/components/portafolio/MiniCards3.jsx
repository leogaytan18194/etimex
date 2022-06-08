import React from "react";
import styled from "styled-components";
import Refrendo from "../../img/refrendo.png";

const Container = styled.div`
  width: 130px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 80px
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
      <Image src={Refrendo} />
      <Text>Alta de placas y 2 refrendos</Text>
    </Container>
  );
};

export default MiniCards;