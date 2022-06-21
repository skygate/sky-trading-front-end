import React from "react";
import "App.scss";
import CreateView from "views/CreateView/CreateView";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ExploreView from "views/ExploreView/ExploreView";
import WalletView from "views/WalletView/WalletView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateView />} />
        <Route path="/explore" element={<ExploreView />} />
        <Route path="/wallet" element={<WalletView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
