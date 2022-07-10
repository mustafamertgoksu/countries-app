import styled from 'styled-components';

export const DetailsViewWrapper = styled.div`
  gap: 50px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  position: relative;
  @media (min-width: ${(props) => props.theme.breakPoints['3xl']}) {
    zoom: 107%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  img {
    object-position: 0%;
    object-fit: contain;

    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      box-shadow: 0 0.1px 0.4rem rgba(0, 0, 0, 0.15);
    }
  }
`;

export const CountrDetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 40px;
  .borders {
    display: flex;
    gap: 20px;
    align-items: center;
    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .borders ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    li {
      transition: transform 0.3s ease;
      cursor: pointer;
      background-color: ${(props) => props.theme.element};
      padding: 5px 10px;
      border-radius: 5px;
      box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
      :hover {
        transform: translateY(-2px);
      }
    }
  }
`;

export const CountryInformation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: ${(props) => props.theme.breakPoints.xl}) {
    flex-direction: column;
    gap: 20px;
  }
  p {
    word-break: keep-all;
  }
  span {
    font-weight: 600;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.element};
  -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.5);

  color: ${(props) => props.theme.text};
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100px;
  position: relative;
  bottom: 30px;
  @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
    bottom: 0;
  }
`;
