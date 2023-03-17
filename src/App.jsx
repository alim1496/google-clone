import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
