import './App.css';
import Start from './components/start/Start'
import { Routes, Route, Outlet, Link } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={< Start />}></Route>
    </Routes>
  );
}

export default App;
