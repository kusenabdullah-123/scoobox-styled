import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 75px;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 75px;
  list-style-type: none;
`;
const Li = styled.li`
  display: flex;
  width: 70px;
  align-items: center;
  justify-content: center;
`;
const SignLi = styled(Li)`
  background-color: #363636;
  border-radius: 12px;
`;
const LinkNav = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
const SignLink = styled(LinkNav)`
  background-color: #363636;
  border-radius: 12px;
  color: #ffffff;
`;
const Navbar = () => {
  return (
    <Nav>
      <Title>Scoobox</Title>
      <Ul>
        <Li>
          <LinkNav href="">Home</LinkNav>
        </Li>
        <Li>
          <LinkNav href="">Services</LinkNav>
        </Li>
        <Li>
          <LinkNav href="">Contact</LinkNav>
        </Li>
        <Li>
          <LinkNav href="">Login</LinkNav>
        </Li>
        <SignLi>
          <SignLink href="">Signup</SignLink>
        </SignLi>
      </Ul>
    </Nav>
  );
};

export default Navbar;
