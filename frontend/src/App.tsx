import "App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import CreateView from "views/CreateView";
import ExploreView from "views/ExploreView";
import WalletView from "views/WalletView";
import DraftsView from "views/DraftsView";
import { useEffect } from "react";
import axios from "axios";

const test = async () => {
  try {
    const result = await axios.post("http://localhost:8000/strategy", {
      name: "dawdsf",
      date: 235654234,
    });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

function App() {
  useEffect(() => {
    test();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateView />} />
        <Route path="/explore" element={<ExploreView />} />
        <Route path="/wallet" element={<WalletView />} />
        <Route path="/drafts" element={<DraftsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
