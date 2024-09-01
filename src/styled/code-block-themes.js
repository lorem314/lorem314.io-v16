import { css } from "styled-components"

const dracula = css`
  color: #f8f8f2;
  background-color: #282a36;
  .prolog,
  .constant,
  .builtin {
    color: rgb(189, 147, 249);
  }
  .inserted,
  .function {
    color: rgb(80, 250, 123);
  }
  .deleted {
    color: rgb(255, 85, 85);
  }
  .changed {
    color: rgb(255, 184, 108);
  }
  .punctuation,
  .symbol {
    color: rgb(248, 248, 242);
  }
  .string,
  .char,
  .tag,
  .selector {
    color: rgb(255, 121, 198);
  }
  .keyword,
  .variable {
    color: rgb(189, 147, 249);
    font-style: italic;
  }
  .comment {
    color: rgb(98, 114, 164);
  }
  .attr-name {
    color: rgb(241, 250, 140);
  }
  .highlight {
    background: hsla(0, 0%, 30%, 0.5);
  }
`
const duotoneDark = css`
  color: #9a86fd;
  background-color: #2a2734;
  .comment,
  .prolog,
  .doctype,
  .cdata,
  .punctuation {
    color: #6c6783;
  }
  .namespace {
    opacity: 0.7;
  }
  .tag,
  .operator,
  .number {
    color: #e09142;
  }
  .property,
  .function {
    color: #9a86fd;
  }
  .tag-id,
  .selector,
  .atrule-id {
    color: #eeebff;
  }
  .attr-name {
    color: #c4b9fe;
  }
  .boolean,
  .string,
  .entity,
  .url,
  .attr-value,
  .keyword,
  .control,
  .directive,
  .unit,
  .statement,
  .regex,
  .at-rule,
  .placeholder,
  .variable {
    color: #ffcc99;
  }
  .deleted {
    text-decoration-line: line-through;
  }
  .inserted {
    text-decoration-line: underline;
  }
  .italic {
    font-style: italic;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .important {
    color: #c4b9fe;
  }
  .highlight {
    background: hsla(0, 0%, 30%, 0.5);
  }
`
const duotoneLight = css`
  color: #728fcb;
  background-color: #faf8f5;
  .comment,
  .prolog,
  .doctype,
  .cdata,
  .punctuation {
    color: #b6ad9a;
  }
  .namespace {
    opacity: 0.7;
  }
  .tag,
  .operator,
  .number {
    color: #063289;
  }
  .property,
  .function {
    color: #b29762;
  }
  .tag-id,
  .selector,
  .atrule-id {
    color: #2d2006;
  }
  .attr-name {
    color: #896724;
  }
  .boolean,
  .string,
  .entity,
  .url,
  .attr-value,
  .keyword,
  .control,
  .directive,
  .unit,
  .statement,
  .regex,
  .at-rule {
    color: #728fcb;
  }
  .placeholder,
  .variable {
    color: #93abdc;
  }
  .deleted {
    text-decoration-line: line-through;
  }
  .inserted {
    text-decoration-line: underline;
  }
  .italic {
    font-style: italic;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .important {
    color: #896724;
  }
  .highlight {
    background: hsla(0, 0%, 70%, 0.5);
  }
`
const github = css`
  color: #393a34;
  background-color: #f6f8fa;
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: #999988;
    font-style: italic;
  }
  .namespace {
    opacity: 0.7;
  }
  .string,
  .attr-value {
    color: #e3116c;
  }
  .punctuation,
  .operator {
    color: #393a34;
  }
  .entity,
  .url,
  .symbol,
  .number,
  .boolean,
  .variable,
  .constant,
  .property,
  .regex,
  .inserted {
    color: #36acaa;
  }
  .atrule,
  .keyword,
  .attr-name,
  .selector {
    color: #00a4db;
  }
  .function,
  .deleted,
  .tag {
    color: #d73a49;
  }
  .function-variable {
    color: #6f42c1;
  }
  .tag,
  .selector,
  .keyword {
    color: #00009f;
  }
  .highlight {
    background: hsla(0, 0%, 70%, 0.5);
  }
`
const nightOwlLight = css`
  color: #403f53;
  background-color: #fbfbfb;
  .changed {
    color: rgb(162, 191, 252);
    font-style: italic;
  }
  .deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }
  .inserted,
  .attr-name {
    color: rgb(72, 118, 214);
    font-style: italic;
  }
  .comment {
    color: rgb(152, 159, 177);
    font-style: italic;
  }
  .string,
  .builtin,
  .char,
  .constant,
  .url {
    color: rgb(72, 118, 214);
  }
  .variable {
    color: rgb(201, 103, 101);
  }
  .number {
    color: rgb(170, 9, 130);
  }
  .punctuation {
    color: rgb(153, 76, 195);
  }
  .function,
  .selector,
  .doctype {
    color: rgb(153, 76, 195);
    font-style: italic;
  }
  .class-name {
    color: rgb(17, 17, 17);
  }
  .tag {
    color: rgb(153, 76, 195);
  }
  .operator,
  .property,
  .keyword,
  .namespace {
    color: rgb(12, 150, 155);
  }
  .boolean {
    color: rgb(188, 84, 84);
  }
  .highlight {
    background: hsla(0, 0%, 70%, 0.5);
  }
`
const nightOwl = css`
  color: #d6deeb;
  background-color: #011627;
  .changed {
    color: rgb(162, 191, 252);
    font-style: italic;
  }
  .deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }
  .inserted,
  .attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }
  .comment {
    color: rgb(99, 119, 119);
    font-style: italic;
  }
  .string,
  .url {
    color: rgb(173, 219, 103);
  }
  .variable {
    color: rgb(214, 222, 235);
  }
  .number {
    color: rgb(247, 140, 108);
  }
  .builtin,
  .char,
  .constant,
  .function {
    color: rgb(130, 170, 255);
  }
  .punctuation {
    color: rgb(199, 146, 234);
  }
  .selector,
  .doctype {
    color: rgb(199, 146, 234);
    font-style: italic;
  }
  .class-name {
    color: rgb(255, 203, 139);
  }
  .tag,
  .operator,
  .keyword {
    color: rgb(127, 219, 202);
  }
  .boolean {
    color: rgb(255, 88, 116);
  }
  .property {
    color: rgb(128, 203, 196);
  }
  .namespace {
    color: rgb(178, 204, 214);
  }
  .highlight {
    background: hsla(0, 0%, 30%, 0.5);
  }
`
const oceanicNext = css`
  color: #ffffff;
  background-color: #282c34;
  .attr-name {
    color: #c5a5c5;
  }
  .attr-value {
    color: #8dc891;
  }
  .comment,
  .block-comment,
  .prolog,
  .doctype,
  .cdata,
  .shebang {
    color: #999999;
  }
  .property,
  .number,
  .function-name,
  .constant,
  .symbol,
  .deleted {
    color: #5a9bcf;
  }
  .boolean {
    color: #ff8b50;
  }
  .tag {
    color: #fc929e;
  }
  .string {
    color: #8dc891;
  }
  .punctuation {
    color: #8dc891;
  }
  .selector,
  .char,
  .builtin,
  .inserted {
    color: #d8dee9;
  }
  .function {
    color: #79b6f2;
  }
  .operator,
  .entity,
  .url,
  .variable {
    color: #d7deea;
  }
  .keyword {
    color: #c5a5c5;
  }
  .at-rule,
  .class-name {
    color: #fac863;
  }
  .important {
    font-weight: 400;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .namespace {
    opacity: 0.7;
  }
  .highlight {
    background: hsla(0, 0%, 40%, 0.5);
  }
`
const prismCoy = css`
  color: black;
  background-color: #fdfdfd;
  .comment,
  .block-comment,
  .prolog,
  .doctype,
  .cdata {
    color: #7d8b99;
  }
  .punctuation {
    color: #5f6364;
  }
  .property,
  .tag,
  .boolean,
  .number,
  .function-name,
  .constant,
  .symbol,
  .deleted {
    color: #c92c2c;
  }
  .selector,
  .attr-name,
  .string,
  .char,
  .function,
  .builtin,
  .inserted {
    color: #2f9c0a;
  }
  .operator,
  .entity,
  .url,
  .variable {
    color: #a67f59;
    /* background: rgba(255, 255, 255, 0.5); */
  }
  .atrule,
  .attr-value,
  .keyword,
  .class-name {
    color: #1990b8;
  }
  .regex,
  .important {
    color: #e90;
  }
  .language-css .string,
  .style .string {
    color: #a67f59;
    background: rgba(255, 255, 255, 0.5);
  }
  .important {
    font-weight: normal;
  }
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }
  .highlight {
    background: hsla(0, 0%, 70%, 0.5);
  }
`
const prismDark = css`
  color: white;
  background-color: hsl(30, 20%, 25%);
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: hsl(30, 20%, 50%);
  }
  .punctuation {
    opacity: 0.7;
  }
  .namespace {
    opacity: 0.7;
  }
  .property,
  .tag,
  .boolean,
  .number,
  .constant,
  .symbol {
    color: hsl(350, 40%, 70%);
  }
  .selector,
  .attr-name,
  .string,
  .char,
  .builtin,
  .inserted {
    color: hsl(75, 70%, 60%);
  }
  .operator,
  .entity,
  .url,
  .language-css .string,
  .style .string,
  .variable {
    color: hsl(40, 90%, 60%);
  }
  .atrule,
  .attr-value,
  .keyword {
    color: hsl(350, 40%, 70%);
  }
  .regex,
  .important {
    color: #e90;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .deleted {
    color: red;
  }
  .highlight {
    background: hsla(0, 0%, 70%, 0.5);
  }
`
const prismFunky = css`
  color: white;
  background-color: black;
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: #aaa;
  }
  .punctuation {
    color: #999;
  }
  .namespace {
    opacity: 0.7;
  }
  .property,
  .tag,
  .boolean,
  .number,
  .constant,
  .symbol {
    color: #0cf;
  }
  .selector,
  .attr-name,
  .string,
  .char,
  .builtin {
    color: yellow;
  }
  .operator,
  .entity,
  .url,
  .language-css .string,
  .variable,
  .inserted {
    color: yellowgreen;
  }
  .atrule,
  .attr-value,
  .keyword {
    color: deeppink;
  }
  .regex,
  .important {
    color: orange;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .deleted {
    color: red;
  }
  .highlight {
    background: hsla(0, 0%, 40%, 0.5);
  }
`
const prismOkaidia = css`
  color: #f8f8f2;
  background-color: #272822;
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: #8292a2;
  }
  .punctuation {
    color: #f8f8f2;
  }
  .namespace {
    opacity: 0.7;
  }
  .property,
  .tag,
  .constant,
  .symbol,
  .deleted {
    color: #f92672;
  }
  .boolean,
  .number {
    color: #ae81ff;
  }
  .selector,
  .attr-name,
  .string,
  .char,
  .builtin,
  .inserted {
    color: #a6e22e;
  }
  .operator,
  .entity,
  .url,
  .language-css .string,
  .style .string,
  .variable {
    color: #f8f8f2;
  }
  .atrule,
  .attr-value,
  .function,
  .class-name {
    color: #e6db74;
  }
  .keyword {
    color: #66d9ef;
  }
  .regex,
  .important {
    color: #fd971f;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .highlight {
    background: hsla(0, 0%, 30%, 0.5);
  }
`
const prismSolarizedLight = css`
  color: #657b83;
  background-color: #073642;
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: #93a1a1;
  }
  .punctuation {
    color: #586e75;
  }
  .namespace {
    opacity: 0.7;
  }
  .property,
  .tag,
  .boolean,
  .number,
  .constant,
  .symbol,
  .deleted {
    color: #268bd2;
  }
  .selector,
  .attr-name,
  .string,
  .char,
  .builtin,
  .url,
  .inserted {
    color: #2aa198;
  }
  .entity {
    color: #657b83;
    background: #eee8d5;
    cursor: help;
  }
  .atrule,
  .attr-value,
  .keyword {
    color: #859900;
  }
  .function,
  .class-name {
    color: #b58900;
  }
  .regex,
  .important,
  .variable {
    color: #cb4b16;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .highlight {
    background: hsla(0, 70%, 40%, 0.2);
  }
`
const prismTomorrow = css`
  color: #ccc;
  background-color: #2d2d2d;
  .comment,
  .block-comment,
  .prolog,
  .doctype,
  .cdata {
    color: #999;
  }
  .punctuation {
    color: #ccc;
  }
  .tag,
  .attr-name,
  .namespace,
  .deleted {
    color: #e2777a;
  }
  .function-name {
    color: #6196cc;
  }
  .boolean,
  .number,
  .function {
    color: #f08d49;
  }
  .property,
  .class-name,
  .constant,
  .symbol {
    color: #f8c555;
  }
  .selector,
  .important,
  .atrule,
  .keyword,
  .builtin {
    color: #cc99cd;
  }
  .string,
  .char,
  .attr-value,
  .regex,
  .variable {
    color: #7ec699;
  }
  .operator,
  .entity,
  .url {
    color: #67cdcc;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .inserted {
    color: green;
  }
  .highlight {
    background: hsla(0, 0%, 30%, 0.5);
  }
`
const prismTwilight = css`
  color: white;
  background-color: hsl(0, 0%, 8%);
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: hsl(0, 0%, 47%);
  }
  .punctuation {
    opacity: 0.7;
  }
  .namespace {
    opacity: 0.7;
  }
  .tag,
  .boolean,
  .number,
  .deleted {
    color: hsl(14, 58%, 55%);
  }
  .keyword,
  .property,
  .selector,
  .constant,
  .symbol,
  .builtin {
    color: hsl(53, 89%, 79%);
  }
  .attr-name,
  .attr-value,
  .string,
  .char,
  .operator,
  .entity,
  .url,
  .language-css .string,
  .style .string,
  .variable,
  .inserted {
    color: hsl(76, 21%, 52%);
  }
  .atrule {
    color: hsl(218, 22%, 55%);
  }
  .regex,
  .important {
    color: hsl(42, 75%, 65%);
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .language-markup .tag,
  .language-markup .attr-name,
  .language-markup .punctuation {
    color: hsl(33, 33%, 52%);
  }
  .empty {
    position: relative;
    z-index: 1;
  }
  .line-highlight {
    background: hsla(0, 0%, 33%, 0.25);
    border-top: 1px dashed hsl(0, 0%, 33%);
    border-bottom: 1px dashed hsl(0, 0%, 33%);
    left: 0;
    line-height: inherit;
    margin-top: 0.75em;
    padding: inherit 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    white-space: pre;
    z-index: 0;
  }
  .line-highlight:before,
  .line-highlight[data-end]:after {
    background-color: hsl(215, 15%, 59%);
    border-radius: 999px;
    box-shadow: 0 1px white;
    color: hsl(24, 20%, 95%);
    content: attr(data-start);
    font: bold 65%/1.5 sans-serif;
    left: 0.6em;
    min-width: 1em;
    padding: 0 0.5em;
    position: absolute;
    text-align: center;
    text-shadow: none;
    top: 0.4em;
    vertical-align: 0.3em;
  }
  .line-highlight[data-end]:after {
    bottom: 0.4em;
    content: attr(data-end);
    top: auto;
  }
  .highlight {
    background: hsla(0, 0%, 30%, 0.5);
  }
` // not recommanded
const prism = css`
  color: black;
  background-color: #f5f2f0;
  .comment,
  .prolog,
  .doctype,
  .cdata {
    color: slategray;
  }
  .punctuation {
    color: #999;
  }
  .namespace {
    opacity: 0.7;
  }
  .property,
  .tag,
  .boolean,
  .number,
  .constant,
  .symbol,
  .deleted {
    color: #905;
  }
  .selector,
  .attr-name,
  .string,
  .char,
  .builtin,
  .inserted {
    color: #690;
  }
  .operator,
  .entity,
  .url,
  .language-css,
  .string,
  .style,
  .string {
    color: #9a6e3a;
    /* background: hsla(0, 0%, 100%, 0.5); */
  }
  .atrule,
  .attr-value,
  .keyword {
    color: #07a;
  }
  .function,
  .class-name {
    color: #dd4a68;
  }
  .regex,
  .important,
  .variable {
    color: #e90;
  }
  .important,
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  .entity {
    cursor: help;
  }
  .highlight {
    background: hsla(0, 0%, 70%, 0.5);
  }
`
const shadesOfPurple = css`
  color: #9efeff;
  background-color: #2d2a55;
  .changed {
    color: rgb(255, 238, 128);
  }
  .deleted {
    color: rgba(239, 83, 80, 0.56);
  }
  .inserted {
    color: rgb(173, 219, 103);
  }
  .comment {
    color: rgb(179, 98, 255);
    font-style: italic;
  }
  .punctuation {
    color: rgb(255, 255, 255);
  }
  .constant {
    color: rgb(255, 98, 140);
  }
  .string,
  .url {
    color: rgb(165, 255, 144);
  }
  .variable {
    color: rgb(255, 238, 128);
  }
  .number,
  .boolean {
    color: rgb(255, 98, 140);
  }
  .attr-name {
    color: rgb(255, 180, 84);
  }
  .keyword,
  .operator,
  .property,
  .namespace,
  .tag,
  .selector,
  .doctype {
    color: rgb(255, 157, 0);
  }
  .builtin,
  .char,
  .constant,
  .function,
  .class-name {
    color: rgb(250, 208, 0);
  }
  .highlight {
    background: hsla(0, 0%, 40%, 0.5);
  }
`
const ultramin = css`
  color: #282a2e;
  background-color: #ffffff;
  .comment {
    color: rgb(197, 200, 198);
  }
  .string,
  .number,
  .builtin,
  .variable {
    color: rgb(150, 152, 150);
  }
  .class-name,
  .function,
  .tag,
  .attr-name {
    color: rgb(40, 42, 46);
  }
  .highlight {
    background: hsla(0, 90%, 80%, 0.5);
  }
` // not recommanded
const vsDark = css`
  color: #9cdcfe;
  background-color: #1e1e1e;
  .prolog {
    color: rgb(0, 0, 128);
  }
  .comment {
    color: rgb(106, 153, 85);
  }
  .builtin,
  .changed,
  .keyword {
    color: rgb(86, 156, 214);
  }
  .number,
  .inserted {
    color: rgb(181, 206, 168);
  }
  .constant {
    color: rgb(100, 102, 149);
  }
  .attr-name,
  .variable {
    color: rgb(156, 220, 254);
  }
  .deleted,
  .string,
  .attr-value {
    color: rgb(206, 145, 120);
  }
  .selector {
    color: rgb(215, 186, 125);
  }
  .tag {
    color: rgb(86, 156, 214);
  }
  .punctuation,
  .operator {
    color: rgb(212, 212, 212);
  }
  .punctuation {
    color: #808080;
  }
  .function {
    color: rgb(220, 220, 170);
  }
  .class-name {
    color: rgb(78, 201, 176);
  }
  .char {
    color: rgb(209, 105, 105);
  }
  .highlight {
    background: hsla(0, 0%, 40%, 0.5);
  }
`

const codeBlockTheme = {
  dracula,
  duotoneDark,
  duotoneLight,
  github,
  nightOwlLight,
  nightOwl, // dark
  oceanicNext,
  prismCoy,
  prismDark,
  prismFunky,
  prismOkaidia,
  prismSolarizedLight,
  prismTomorrow,
  prismTwilight,
  prism,
  shadesOfPurple,
  ultramin,
  vsDark,
}

export default codeBlockTheme
