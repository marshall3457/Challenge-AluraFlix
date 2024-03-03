import styled from "styled-components";
import Logo from "../Logo";

const PositionLogo = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #2A7AE4;
  padding: 1rem;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <PositionLogo>
      <Logo src="logoAluraflix.png" alt="logo de aluraflix"/>
    </PositionLogo>
  );
};

export default Footer;