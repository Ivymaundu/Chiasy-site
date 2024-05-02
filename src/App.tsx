import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './pages/login';
import Register from './pages/Register';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
// import Products from './pages/Products';

function App(){
  return(
    <Routes>
      <Route element={<  Layout />}>
          <Route path="/" element={<  LandingPage />}/>
          <Route path="/login" element={<  Login />}/>
          <Route path="/register" element={<  Register />}/>
          <Route path="/about" element={< About />}/>
          <Route path="/contact-us" element={< ContactUs />}/>
          {/* <Route path="/products" element={< Products />}/> */}
      </Route>
      
    </Routes>
  )
}
export default App