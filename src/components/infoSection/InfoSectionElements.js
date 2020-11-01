import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 999;
  background: linear-gradient(
    720deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
`;

export const InfoWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const InfoContent = styled.div`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 1.1px;
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.5);
  padding: 2rem 0;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
`;

export const InfoHeading = styled.h3`
  font-weight: 700;
  width: 70%;
  line-height: 1.1;
  padding: 0.2rem;
  border-bottom: 3px solid #fff;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const InfoParagraph = styled.p`
  font-weight: 600;
  line-height: 1.5;
  padding: 0.2rem;
  margin: 0 auto;
`;

export const InfoButton = styled(Link)`
  background: rgba(253, 187, 45, 1);
  color: #000;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 25rem;
  margin-top: 2rem;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  &:active,
  &:hover {
    color: #111;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
`;
