import parse from "https://cdn.skypack.dev/html-react-parser";
const App = () => {
  const [editorText, setEditorText] = React.useState("# Welcome to my React Markdown Previewer!\r\n\r\n## This is a sub-heading...\r\n### And here's some other cool stuff:\r\n\r\n  Heres some code, `<div><\/div>`, between 2 backticks.\r\n\r\n```\r\n\/\/ this is multi-line code:\r\n\r\nfunction anotherExample(firstLine, lastLine) {\r\n  if (firstLine == '```' && lastLine == '```') {\r\n    return multiLineCode;\r\n  }\r\n}\r\n```\r\n\r\nYou can also make text **bold**... whoa!\r\nOr _italic_.\r\nOr... wait for it... **_both!_**\r\nAnd feel free to go crazy ~~crossing stuff out~~.\r\n\r\nThere's also [links](https:\/\/www.freecodecamp.org), and\r\n> Block Quotes!\r\n\r\nAnd if you want to get really crazy, even tables:\r\n\r\nWild Header | Crazy Header | Another Header?\r\n------------ | ------------- | -------------\r\nYour content can | be here, and it | can be here....\r\nAnd here. | Okay. | I think we get it.\r\n\r\n- And of course there are lists.\r\n  - Some are bulleted.\r\n     - With different indentation levels.\r\n        - That look like this.\r\n\r\n\r\n1. And there are numbered lists too.\r\n1. Use just 1s if you want!\r\n1. And last but not least, let's not forget embedded images:\r\n\r\n![freeCodeCamp Logo](https:\/\/cdn.freecodecamp.org\/testable-projects-fcc\/images\/fcc_secondary.svg)\r\n");
  const handleChange = e => {
    setEditorText(e.target.value);
  };
  const parsedText = () => parse(DOMPurify.sanitize(marked.parse(editorText, { breaks: true })));

  return /*#__PURE__*/(
    React.createElement("div", { id: "parent" }, /*#__PURE__*/
    React.createElement("div", { id: "editor-box" }, /*#__PURE__*/
    React.createElement("h2", null, "EDITOR"), /*#__PURE__*/
    React.createElement("textarea", { id: "editor", rows: "30", cols: "50", onChange: handleChange }, editorText)), /*#__PURE__*/

    React.createElement("div", { id: "previewer-main-box" }, /*#__PURE__*/
    React.createElement("h2", null, "PREVIEWER"), /*#__PURE__*/
    React.createElement("div", { id: "previewer-box" }, /*#__PURE__*/
    React.createElement("div", { id: "preview" }, parsedText())))));




};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));