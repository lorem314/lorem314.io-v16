import { createGlobalStyle, css } from "styled-components"

import colors, { insertColors } from "./colors"
import themedColors, { saperateTheme, insertTheme } from "./themed-colors"
import transitions, { insertTransitions } from "./transitions"
import sizes from "./sizes"
import breakPoints from "./break-points"
import codeBlockTheme from "./code-block-themes"

const [light, dark] = saperateTheme(themedColors)

const styled = { createGlobalStyle }

const cssSvgIcon = css`
  --svg-icon-size: 24px;

  padding: 0.25rem;
  border: none;
  border-radius: 0.25rem;
  color: currentColor;
  background-color: var(--svg-icon-bg);

  &:hover {
    background-color: var(--svg-icon-bg-hover);
  }
  &:active {
    background-color: var(--svg-icon-bg-active);
  }
  &.current {
    color: var(--svg-icon-color-current);
    background-color: var(--svg-icon-bg-current);
  }
`

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --test: 1px;
    --svg-icon-size: 16px;

    ${() => insertTransitions(transitions)}
    ${() => insertColors(colors)}

    &,
    &[data-theme="light"] {
      color-scheme: light;
      ${insertTheme(light)}

      .mdx-code-block {
        > header {
          background-color: var(--ba-100);
        }
        ${codeBlockTheme.prism}
      }
    }

    /* &, */
    &[data-theme="dark"] {
      color-scheme: dark;
      ${insertTheme(dark)}

      .mdx-code-block {
        > header {
          background-color: var(--wa-50);
        }
        ${codeBlockTheme.nightOwl}
      }

      img {
        filter: brightness(87.5%);
      }
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    /* width: 100%; */
    /* height: 100%; */
  }

  body {
    margin: 0;
    /* width: 100%; */
    /* height: 100%; */
    overflow-x: hidden;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }

  /* reset */
  a {
    color: var(--link-color);
    text-underline-offset: 0.25rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    cursor: pointer;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    line-height: 1.5;

    white-space: nowrap;

    /* border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.75rem;
    background-color: var(--gray-200);
    &:hover {
      background-color: var(--gray-300);
    }
    &:active {
      background-color: var(--gray-400);
    } */
  }
  input {
    font-size: 1rem;
    line-height: 1.5;

    /* text-ish */
    &[type="search"],
    &[type="text"] {
      width: 100%;
      height: 2.5rem;
      padding: 0 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid var(--content-color-3);
      background-color: transparent;

      &:hover {
        border: 1px solid var(--content-color-2);
      }

      &:focus,
      &:focus-visible {
        outline: none;
        border-color: var(--ui-input-focus-border-color);
        box-shadow: var(--ui-input-focus-border-color) 0px 0px 0px 1px;
      }
    }
  }
  svg {
    display: block;
    width: var(--svg-icon-size);
    height: var(--svg-icon-size);
  }

  /* custom className */
  .svg-icon {
    ${cssSvgIcon}
  }
  .page-content {
    border-radius: 0.25rem;
    padding: 10px;
    background-color: var(--content-bg);
    box-shadow: 0 1px 0 1px var(--content-box-shadow);
  }
  .content-title {
    font-family: "Fira Code";
    color: var(--content-title-color);
    user-select: none;
    font-size: 1rem;
    font-weight: bolder;
    display: block;
    margin: 0 0 0.625rem;
    border-bottom: 1px solid var(--content-color-3);
    padding: 0 0 0.375rem;
  }
  .fira-code {
    font-family: "Fira Code";
  }
`

export default GlobalStyle
export { sizes, cssSvgIcon, breakPoints as bp }
