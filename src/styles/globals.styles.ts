import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Nunito Sans', sans-serif;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
    }
    * {
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
        margin: 0;
        padding: 0;
    }

/* Chrome, Edge, and Safari */

*::-webkit-scrollbar {
    width: 12px;
}

*::-webkit-scrollbar-track {
    background: #020327;
}

*::-webkit-scrollbar-thumb {
    background-color: #c0c0c04f;
    border-radius: 4px;
}
`;

import { css } from 'styled-components';

export const FlexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
