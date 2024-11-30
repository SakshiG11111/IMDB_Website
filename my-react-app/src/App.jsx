import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import WatchList from "./Components/WatchList";
import { Routes,Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/watchList" element={<WatchList></WatchList>}></Route>
      </Routes>

      
    </>
  );
}

export default App
