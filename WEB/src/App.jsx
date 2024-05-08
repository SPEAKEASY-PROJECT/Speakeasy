import './App.css';
import { Route, Routes } from "react-router-dom";
import Functional from './components/functional/functional';
import RegisterBar from './components/registerBar/registerBar';
import Navbar from './components/ui/navbar/navbar';
import Footer from "./components/ui/footer/footer";
import Home from './pages/home/home';
import Register from './pages/register/register';
import Login from './pages/login/login';

function App() {

  return (
      <> 
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/register" element= {<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navbar />
        <RegisterBar />
        <Functional />
        <Footer />
      </>
  )
}

export default App;
