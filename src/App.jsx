import {BrowserRouter, Routes, Route} from "react-router"
import { useState } from "react";
import {clubs} from "./components/ClubData.jsx"
import Home from "./pages/Home.jsx";
import ClubList from "./pages/ClubList.jsx";
import ClubDetail from "./pages/ClubDetail.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  console.log(clubs);
  const [joinedList, setJoined] = useState([]);
  console.log(joinedList);

  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="clubs">
            <Route index element={<ClubList/>}/>
            <Route path=":clubId" element={<ClubDetail joined={joinedList} setJoined={setJoined}/>}/>
          </Route>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
