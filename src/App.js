
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import ArticlePage from './pages/Articlepage';
import Articleslistpage from './pages/Articleslistpage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<Articleslistpage />}/>
            <Route path="/articles/:articleID" element={<ArticlePage />}/>
          </Routes>
        </div>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;
