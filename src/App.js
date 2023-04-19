import React, { useState, useEffect } from "react";
import Preloader from "../src/components1/Pre";
import Navbar from "./components1/Navbar";
import Home from "./components1/Home/Home";
// import Projects from "./components1/Projects/Projects";
import Projects from "./components1/Projects/Projects";
import About from "./components1/About/About";
// import Chat from "./components1/Chat/Chat";
import Contact from "./components1/Contact/Contact";
import Footer from "./components1/Footer";
import Error from "./components1/Error";
// import MainForm from './components1/MainForm';
// import ChatRoom1  from './components1/ChatRoom1';
// import ChatRoom from './components1/Home/ChatRoom'
import { useAuth0 } from "@auth0/auth0-react";
import Join from './components/Join';
import Chat from './components/ChatRoom';
// import { useParams } from 'react-router-dom';

// import Resume from "./components1/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";
import ScrollToTop from "./components1/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Mainform"  element={<Join/>} />
          <Route path="/c/name=:name-room=:room" element={<Chat/>} />
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> */
          {/* <Route path="/C" element={<ChatRoom/>} /> */}
          <Route path="/Mainform" element={<Join />} />
          {/* <Route path="/chat/name=:name-room=:room" element={<Chat />} /> */}
          {/* <Route path="/C" element={<Chat />} /> */}
          {/* <Route path="/" element={<Home/>} /> */}
           <Route path="*" element={<Error/> } /> 
          {/* <Route path="/"   element={<Join/> }  />
          <Route path="/chat/name=:name-room=:room"element={<Chat/> }  /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
