import './App.css';
import { Route, Routes } from "react-router-dom";
import Welcome from './pages/welcome/welcome';
import Intro from './pages/intro/intro';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Playlist from './pages/playlist/playlist';
import Locals from './pages/locals/locals';
import Comunity from './pages/comunity/comunity';
import Events from './pages/events/events';


function App() {
  return (

    <main className="flex-shrink-0">
      
      <Routes>
        <Route path="/" element= {<Welcome />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/locals" element={<Locals />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="/events" element={<Events />} />
      </Routes> 
    </main>
);
}

export default App;
