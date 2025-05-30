import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/favorites" element = {<Favorites/>}></Route>
        </Routes>
      </main>
      </MovieProvider>
      </>
  );
}

export default App;
