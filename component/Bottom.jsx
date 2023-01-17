import styled from "styled-components";
const SectionBottom = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  color: white;
  height: 385px;
  background-image: url("../image/image-foot.png");
`;
const Title = styled.h1`
  font-size: 46px;
  width: 478px;
  text-align: center;
`;
const Bottom = () => {
  return (
    <SectionBottom>
      <Title>Nikmati Liburanmu dengan kita</Title>
    </SectionBottom>
    // <section className="bottom flex flex-justify-center flex-align-center font-popin white">
    //   <h1>Nikmati Liburanmu dengan kita</h1>
    // </section>
  );
};
export default Bottom;
