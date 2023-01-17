import styled from "styled-components";
const Footers = styled.footer`
  height: 100px;
  padding: 0px 75px 0px 75px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;
const Title = styled.h1``;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;
const Li = styled.li`
  width: 67px;
  list-style-type: none;
`;
const LinkHref = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

const Footer = () => {
  return (
    <Footers>
      <Title>Scoobox</Title>
      <Ul>
        <Li>
          <LinkHref>Home</LinkHref>
        </Li>
        <Li>
          <LinkHref>Services</LinkHref>
        </Li>
        <Li>
          <LinkHref>Contact</LinkHref>
        </Li>
      </Ul>
    </Footers>
  );
};

export default Footer;
