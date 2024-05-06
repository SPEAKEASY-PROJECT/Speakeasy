import './App.css'
import Functional from './components/functional/functional';
import Register from './components/register/register';
import Footer from "./components/ui/footer/footer";
import Navbar from './components/ui/navbar/navbar';

function App() {

  return (
      <> 
        <Navbar />
        <Register />
        <Functional />
        <Footer />
      </>
  )
}

export default App;
