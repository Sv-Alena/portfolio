import './App.css';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contacts/ContactPage';
import { HomePage } from './components/homePage/homePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MyProjectsPage } from './components/project/MyProjectPage';


function App() {

  return <Router>
    
    <nav>
      <Link to="/" className="linkLogo">SvElena</Link>
      <Link to="/about" className="link">Обо мне</Link>
      <Link to="/project" className="link">Мои проекты</Link>
      <Link to="/contact" className="link">contact</Link>
      
    </nav>
    <Routes>
      <Route path="/" element={<HomePage/> } />
      <Route path="/about" element={<AboutPage/> } />
      <Route path="/project/" element={<MyProjectsPage/>}/>
      <Route path="/contact" element={ <ContactPage/>}/>
    </Routes>
  </Router>

}

export default App;
