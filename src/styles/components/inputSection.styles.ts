import styled from 'styled-components';
import { FlexBetween } from '../globals.styles';

export const FilterSectionWrapper = styled.div`
  ${FlexBetween};
  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }
  input,
  select {
    background-color: ${(props) => props.theme.element};
    color: ${(props) => props.theme.text};
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
    appearance: none;
  }
  > section {
    border-radius: 0px;
    position: relative;
  }
  svg {
    position: absolute;
    color: ${(props) => props.theme.input};
  }
`;

export const InputSectionStyled = styled.section`
  input {
    padding-left: 80px;
    color: ${(props) => props.theme.input};
    width: 100%;
    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      padding-left: 40px;
      width: auto;
    }
    ::placeholder {
      color: ${(props) => props.theme.input};
    }
  }
  svg {
    top: 20px;
    left: 30px;
    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      left: 15px;
    }
  }
`;

export const SelectSectionStyled = styled.section`
  select {
    padding-right: 60px;
  }
  svg {
    top: 17px;
    right: 15px;
    font-size: 1.5rem;
    pointer-events: none;
  }
`;
