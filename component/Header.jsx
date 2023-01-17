import styled from "styled-components";
const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const HeaderTitle = styled.div`
  width: 394px;
`;
const Images = styled.img`
  width: 500px;
`;
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 60px;
`;
const Span = styled.span`
  color: #8ec3b0;
`;
const RowButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ButtonSewa = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: white;
  border-radius: 12px;
  background-color: #363636;
  padding: 12px 24px;

  text-decoration: none;
`;
const ButtonUnit = styled.a`
  border-bottom: 1px black solid;
  color: #363636;
  text-decoration: none;
`;
const Header = () => {
  return (
    <section>
      <HeaderTop>
        <HeaderTitle>
          <Title>
            Sewa motor Bisa <Span>dipakai</Span>
          </Title>
          <RowButton>
            <ButtonSewa>Sewa Sekarang</ButtonSewa>
            <ButtonUnit>Lihat Daftar Unit</ButtonUnit>
          </RowButton>
        </HeaderTitle>
        <Images src="./image/Group 1home.png"></Images>
      </HeaderTop>
    </section>
  );
};

export default Header;
