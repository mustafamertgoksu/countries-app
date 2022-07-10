import styled from 'styled-components';
import { FlexBetween } from '../globals.styles';

export const CustomNavbar = styled.nav`
  padding: 2rem ${(props) => props.theme.px};
  background: ${(props) => props.theme.element};
  box-shadow: 0 0.1px 0.4rem rgba(0, 0, 0, 0.15);
  @media (min-width: ${(props) => props.theme.breakPoints['2xl']}) {
    padding: 2rem 10rem;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    padding: 1.2rem 1.2rem;
  }
  ${FlexBetween}
  section {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  h4 {
    font-weight: 600;
  }
  h2 {
    cursor: pointer;
    display: inline;
    background-image: linear-gradient(
      transparent 0%,
      transparent 90%,
      ${(props) => props.theme.text} 90%,
      ${(props) => props.theme.text} 100%
    );
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;
    transition: background-size 500ms;
    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      font-size: 1rem;
    }
    :hover {
      background-size: 100% 100%;
      background-position-x: left;
    }
  }
`;
