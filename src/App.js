
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './component/home/home/home';
import Navbar from './component/home/navbar.js/navbar';
import Gallery from "./component/gallery/gallery.js"
import About from './component/about us/about';
import Appointment from './component/appointment/appointment';
import Blogs from './component/blogs/blogs';
import Contact from './component/contacts/contact';
import Services from './component/services/services';

function App() {
  return (
    <>
         <Router>
         <Navbar />
          <Routes>
      
            <Route path='/' element={<Home />} />
            <Route exact path="/Gallery" element={<Gallery />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Appointment" element={<Appointment />} />
            <Route exact path="/Blogs" element={<Blogs />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Services" element={<Services />} />
          </Routes>
        </Router>

    </>
  );
}

export default App;
