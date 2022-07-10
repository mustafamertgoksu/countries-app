import styled from 'styled-components';

export const ContentWrapperStyles = styled.main`
  /* width:100%; */
`;

export const MainWrapper = styled.main`
  padding: ${(props) => props.theme.px} 0;
  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    padding: 30px 0;
  }
  .details-max-container {
    display: flex;
    flex-flow: column;
    gap: 20px;
    padding: 0 ${(props) => props.theme.px};
    @media (min-width: ${(props) => props.theme.breakPoints['2xl']}) {
      padding: 2rem 10rem;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      padding: 0 1.6rem;
    }
  }
`;
