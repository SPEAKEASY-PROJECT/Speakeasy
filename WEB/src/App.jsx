import './App.css';
import { Route, Routes } from "react-router-dom";
import Functional from './components/functional/functional';
import RegisterBar from './components/registerBar/registerBar';
import Navbar from './components/ui/navbar/navbar';
import Footer from "./components/ui/footer/footer";
import Welcome from './pages/welcome/welcome'
import Register from './pages/register/register';
import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {

  return (
      <> 
        <Routes>
          <Route path="/" element= {<Welcome />} />
          <Route path="/register" element= {<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Navbar />
        <RegisterBar />
        <Functional />
        <Footer />
      </>
  )
}

export default App;
