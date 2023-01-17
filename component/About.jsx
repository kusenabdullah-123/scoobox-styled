import styled from "styled-components";
const About = styled.section`
  margin-top: 50px;
`;
const Wrapper = styled.div`
  height: 675px;
  padding: 0px 75px 0px 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Image = styled.div``;
const WrapperTitle = styled.div`
  padding-left: 78px;
  width: 568px;
`;
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #8ec3b0;
`;
const ParagrafTop = styled.p`
  font-size: 32px;
  font-weight: 500;
`;
const paragrafBottom = styled.p`
  text-align: left;
  width: 470px;
  font-size: 20px;
  font-weight: normal;
`;
const Abouts = () => {
  return (
    <About>
      <Wrapper>
        <Image>
          <img src="./image/about.png" alt="about home" />
        </Image>
        <WrapperTitle>
          <Title>Tentang kami</Title>
          <ParagrafTop>
            scoobox adalah situs penyewaan dengan koleksi motor terbanyak
          </ParagrafTop>
          <paragrafBottom>
            Dengan scoobox kamu bisa jelajah Solo. kita mempunyai hampir 120
            Unit motor yang siap menemani liburan kalian berkeliling kota solo.
          </paragrafBottom>
        </WrapperTitle>
      </Wrapper>
    </About>
  );
};
export default Abouts;
