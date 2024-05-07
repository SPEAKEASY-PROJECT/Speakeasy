import './App.css';
import Functional from './components/functional/functional';
import RegisterBar from './components/registerBar/registerBar';
import Footer from "./components/ui/footer/footer";
import Navbar from './components/ui/navbar/navbar';
import Home from './pages/home/home';

function App() {

  return (
      <> 
        <Routes>
          <Route path="/" element=Home={}
        </Routes>
        <Navbar />
        <RegisterBar />
        <Functional />
        <Footer />
      </>
  )
}

export default App;
