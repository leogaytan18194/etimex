
import styled from "styled-components";
import MiniCard from "./MiniCard";
import MiniCards1 from "./MiniCards1";
import MiniCard2 from "./MiniCard2";
import MiniCard3 from "./MiniCard3";
import MiniCards2 from "./MiniCards2";
import MiniCards3 from "./MiniCards3";


const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  border-radius: 40%;
  margin-top: 10%;
  height: 70%;
  margin-left: 100px;
`;


const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;


const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;




const Portafolio = () => {
  return (
    <div className="portafolio" id="portafolio">
    <Container>
      <Left>
        <Image src="assets/vdrive.png" />

      </Left>
      <Right>
        <Wrapper>
          <Title>BESTA Beneficios</Title>
          <Desc>
            Todo esto es lo que obtienes al tener una unidad con nosotros.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard2 />
            <MiniCard3 />
          </CardContainer>
        </Wrapper>
        <Wrapper>
          <CardContainer>
            <MiniCards2 />
            <MiniCards1 />
            <MiniCards3 />
          </CardContainer>
        </Wrapper>
      </Right>
    </Container>
    </div>
  );
};

export default Portafolio;