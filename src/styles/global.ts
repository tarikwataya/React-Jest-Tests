import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-base: #FFFFFF;
    --color-base-dark: #000000;
    --color-shadows: #00000029;
    --color-primary:#707070;
    --color-primary-dark:#4d4d4d;
    --color-live:#A9C5BA;
    --color-live-dark:#5d8977;

    --color-input-error:#cd3232;
    --color-input-success:#2eb82e;

    --background-toast-info: #ebf8ff;
    --color-toast-info: #3172b7;

    --background-toast-success: #e6fffa;
    --color-toast-success: #2e656a;

    --background-toast-error: #fddede;
    --color-toast-error: #c53030;

    --font-primary: 'Mulish', serif;
    --font-titles: 'Roboto Slab', serif;

    --font-size-primary: 500;
    --font-size-footers: 0.9rem;
    --font-size-tooltips: 1rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-base);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: var(--font-primary);
    font-size: var(--font-size-primary);
  }

  h2, h3, h4, h5, h6, strong {
    font-family: var(--font-primary);
    font-weight: var(--font-size-primary);
  }

  h1 {
    font-family: var(--font-titles);
  }

  button {
    cursor: pointer;
  }
`;
