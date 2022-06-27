import "App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import CreateView from "views/CreateView";
import ExploreView from "views/ExploreView";
import WalletView from "views/WalletView";

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
