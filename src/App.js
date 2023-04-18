// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommendation from "./Recommendation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import SlideSideBar from "./SlideSideBar";
import { useState } from "react";

function App() {

  const [isMenu, setIsMenu] = useState(false)

  return (
    <BrowserRouter>
    <div className="App">
        <Header onClickMenu = {setIsMenu} />
        
        <SlideSideBar isMenu={isMenu} onClickCloseMenu={setIsMenu}/>
        <Routes>
          <Route path="/" element={<div className="app__body"><Sidebar /><Recommendation /></div> }></Route>
          <Route path="/search" element={<div className="app__body"><Sidebar /> <SearchPage/> </div> } ></Route>
        </Routes>

    </div>
      </BrowserRouter>


  );
}

export default App;
