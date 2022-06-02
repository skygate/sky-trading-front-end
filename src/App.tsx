import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import CreateView from "./views/CreateView/CreateView";

function App() {
  return (
    <>
      <NavBar />
      <CreateView />
    </>
  );
}

export default App;
