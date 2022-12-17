import { Navigate, Outlet, Router } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { isDarkAtom } from "./atoms";
import { useRecoilValue } from "recoil";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'); 
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family:'Roboto Mono', monospace;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}
}
a{
  text-decoration: none;
  color: inherit;
}
`;
const BackLayer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 100vh;
  width: 100vw;
`;

function Root() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BackLayer>
        <Header />
        <GlobalStyle />
        <HelmetProvider>
          <Outlet />
        </HelmetProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </BackLayer>
    </ThemeProvider>
  );
}

export default Root;
