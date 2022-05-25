import React from "react";
import "./App.scss";
import TextInput from "./components/Common/Input/TextInput";
import SearchInput from "./components/Common/SearchInput/SearchInput";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <SearchInput />
      <TextInput />
    </>
  );
}

export default App;
