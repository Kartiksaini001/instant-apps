import { InstantApp } from "@felvin-search/core";
import { Component, queryToData } from "./App";

const App: InstantApp = {
  id: "@felvin-search-apps/uuid",
  name: "uuid",
  description: "I generate uuid strings",
  queryToData,
  Component,
};
export default App;