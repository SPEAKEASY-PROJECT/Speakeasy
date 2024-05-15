import './App.css';
import { Route, Routes } from "react-router-dom";
import Welcome from './pages/welcome/welcome';
import Intro from './pages/intro/intro';
import HomeGuest from './pages/homeGuest/homeGuest';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Playlist from './pages/playlist/playlist';
import Locals from './pages/locals/locals';
import Comunity from './pages/comunity/comunity';
// import Functional from './components/functional/functional';
//import BaseComponents from './components/ui/baseComponents/baseComponents';

function App() {

  return (

      <main className="flex-shrink-0">
        <audio controls>
          <source src="https://p.scdn.co/mp3-preview/0cd36d02d2474520294b4f4247b9acc7c819b7d0?cid=494c14a0db014067b6acb90f953987b2" type="audio/mpeg"></source>
        </audio>
        <Routes>
          <Route path="/welcome" element= {<Welcome />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/homeGuest" element={<HomeGuest />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element= {<Register />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/locals" element={<Locals />} />
          <Route path="/comunity" element={<Comunity />} />
        </Routes> 
      </main>
  );
}

export default App;
