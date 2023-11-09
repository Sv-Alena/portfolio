import './App.css';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contacts/ContactPage';
import { HomePage } from './components/homePage/homePage';
import { Projects } from './components/project/Projects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  return <Router>
    <nav>
      <Link to="/home" className="linkLogo"> - SvEleNa - </Link>
      <Link to="/about" className="link">about</Link>
      <Link to="/project" className="link">project</Link>
      <Link to="/contact" className="link">contact</Link>
      
    </nav>
    <Routes>
      <Route path="/home" element={<HomePage/> } />
      <Route path="/about" element={<AboutPage/> } />
      <Route path="/project/" element={<Projects/>}/>
      <Route path="/contact" element={ <ContactPage/>}/>
    </Routes>
  </Router>

}

export default App;
