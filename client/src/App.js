import Nav from "./components/Nav";
import Main from "./components/Main";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Routes>
          {/* 2. component -> element, element형태로 넘겨야함 <Home /> */}
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />

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
