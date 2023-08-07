import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
 html {
    scroll-behavior: smooth
 }
 body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'poppins';
    color:##724006
    -webkit-tap.highlight-color: transparent;
    overflow-x: hidden
 }
 a {
    text-decoration: none;
    color: black;
 }
 li {
    list-style: none
 }
`
