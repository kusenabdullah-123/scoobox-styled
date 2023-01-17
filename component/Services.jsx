import styled from "styled-components";
import Card from "./Card";
const Service = styled.div`
  height: 675px;
  padding: 0px 75px 0px 75px;
  padding-bottom: 50px;
  background-color: #747474;
`;
const WrapperService = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  padding-top: 50px;
  font-size: 20px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #8ec3b0;
`;
const ParagrafTop = styled.p`
  font-size: 32px;
  font-weight: 500;
  width: 447px;
  text-align: center;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  color: white;
`;
const ParagrafBottom = styled.p`
  font-size: 20px;
  font-weight: 500;
  width: 628px;
  text-align: center;
  font-weight: normal;
  font-family: "Poppins", sans-serif;
  color: #acacac;
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Services = () => {
  return (
    <Service>
      <WrapperService>
        <Title>Layanan Kami</Title>
        <ParagrafTop>Kita memberikan layanan terbaik untuk anda</ParagrafTop>
        <ParagrafBottom>
          Dengan scoobox kamu bisa jelajah Solo. kita mempunyai hampir 120 Unit
          motor yang siap menemani liburan
        </ParagrafBottom>
        <Cards>
          <Card
            title={"Sewa Murah"}
            desc={
              "Dengan scoobox kamu bisa jelajah Solo. kita mempunyai hampir 120 Unit motor yang siap menemani liburan kalian berkeliling kota solo."
            }
            icons="murah"
          />
          <Card
            title={"Dukungan 24 Jam"}
            desc={
              "Dengan scoobox kamu bisa jelajah Solo. kita mempunyai hampir 120 Unit motor yang siap menemani liburan kalian berkeliling kota solo"
            }
            icons="dukungan"
          />
          <Card
            title={"Aman Dan Terpercaya"}
            desc={
              "Dengan scoobox kamu bisa jelajah Solo. kita mempunyai hampir 120 Unit motor yang siap menemani liburan kalian berkeliling kota solo."
            }
            icons="aman"
          />
        </Cards>
      </WrapperService>
    </Service>
  );
};

export default Services;
