import Nav from "./components/Nav";
import Main from "./components/Main";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NFTpage from "./pages/NFTpage";
import MintingPage from "./pages/MintingPage";

function App() {
  return (
    <>
      <Router>
        {/* <TransferNFT /> */}
        <Nav></Nav>
        <Routes>
          {/* 2. component -> element, element형태로 넘겨야함 <Home /> */}
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/nftpage" element={<NFTpage />} />
          <Route path="/create" element={<MintingPage />} />
          {/* <Route path="/trade" element={<Trade />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/resources" element={<Resources />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
