import styled from "styled-components";
const WrapperUnit = styled.div`
  height: 675px;
  padding: 0px 75px 0px 75px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #8ec3b0;
`;
const Menu = styled.div`
  justify-content: space-between;
  display: flex;
`;
const MenuRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleMenu = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
const TitleMenuRight = styled(TitleMenu)`
  font-size: 24px;
`;
const CardsUnit = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const CardUnit = styled.div`
  width: 250px;
  height: 310px;
  border-radius: 12px;
  padding: 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const Image = styled.div``;
const Price = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Span = styled.span`
  color: #8ec3b0;
`;
const RightDot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #a8a8a8;
`;
const Ahref = styled.a`
  display: flex;
  height: 44px;
  width: 200px;
  background-color: #363636;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  color: white;
`;
const ButtonBottom = styled.div`
  justify-content: center;
  display: flex;
`;
const LinkUnit = styled.a`
  margin-top: 30px;
  height: 44px;
  width: 264px;
  background-color: #363636;
  border-radius: 12px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
`;
const Unit = () => {
  return (
    <section className="unit">
      <WrapperUnit>
        <Title>Unit Kami</Title>
        <Menu>
          <TitleMenu>Unit Sepeda Motor</TitleMenu>
          <MenuRight>
            <TitleMenuRight>Unit Favorit</TitleMenuRight>
            <TitleMenuRight>Motor Matic</TitleMenuRight>
            <TitleMenuRight>Motor Kopling</TitleMenuRight>
          </MenuRight>
        </Menu>
        <CardsUnit>
          <CardUnit>
            <Image>
              <img src="./image/sepeda.png" alt="sepeda" />
            </Image>
            <Price>
              <p>
                <Span>Rp</Span>126.000/Hari
              </p>
              <RightDot>
                <Dot></Dot>
                <p>Matic</p>
              </RightDot>
            </Price>
            <p>Honda Vario 150</p>
            <Ahref href="">Sewa Sekarang</Ahref>
          </CardUnit>
          <CardUnit>
            <Image>
              <img src="./image/sepeda.png" alt="sepeda" />
            </Image>
            <Price>
              <p>
                <Span>Rp</Span>126.000/Hari
              </p>
              <RightDot>
                <Dot></Dot>
                <p>Matic</p>
              </RightDot>
            </Price>
            <p>Honda Vario 150</p>
            <Ahref href="">Sewa Sekarang</Ahref>
          </CardUnit>
          <CardUnit>
            <Image>
              <img src="./image/sepeda.png" alt="sepeda" />
            </Image>
            <Price>
              <p>
                <Span>Rp</Span>126.000/Hari
              </p>
              <RightDot>
                <Dot></Dot>
                <p>Matic</p>
              </RightDot>
            </Price>
            <p>Honda Vario 150</p>
            <Ahref href="">Sewa Sekarang</Ahref>
          </CardUnit>
          <CardUnit>
            <Image>
              <img src="./image/sepeda.png" alt="sepeda" />
            </Image>
            <Price>
              <p>
                <Span>Rp</Span>126.000/Hari
              </p>
              <RightDot>
                <Dot></Dot>
                <p>Matic</p>
              </RightDot>
            </Price>
            <p>Honda Vario 150</p>
            <Ahref href="">Sewa Sekarang</Ahref>
          </CardUnit>
        </CardsUnit>
        <ButtonBottom>
          <LinkUnit>Lihat Daftar Unit</LinkUnit>
        </ButtonBottom>
      </WrapperUnit>
    </section>
  );
};

export default Unit;
