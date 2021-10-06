import { InstantApp } from "@felvin-search/core";
import { Component, queryToData } from "./App";

const App: InstantApp = {
  id: "@felvin-search-apps/latex-render",
  name: "Latex Renderer",
  description: "Enter latex strings to generate output on the fly",
  queryToData,
  Component,
};
export default App;