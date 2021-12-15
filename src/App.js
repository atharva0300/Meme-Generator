import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Footer />
      <div>
        <Routes>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
