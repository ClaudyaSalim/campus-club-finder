import {BrowserRouter, Routes, Route} from "react-router"
import {clubs} from "./components/ClubData.jsx"
import Home from "./pages/Home.jsx";
import ClubList from "./pages/ClubList.jsx";
import ClubDetail from "./pages/ClubDetail.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  console.log(clubs);

  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="clubs">
            <Route index element={<ClubList/>}/>
            <Route path=":clubId" element={<ClubDetail/>}/>
          </Route>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
