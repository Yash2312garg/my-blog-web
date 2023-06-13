
import './App.css';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import ArticlePage from './pages/Articlepage';
import Articleslistpage from './pages/Articleslistpage';

function App() {
  return (
    <div className="App">
      <h1>My Awesome blog</h1>
      <div id="page-body">
        <HomePage />
        <AboutPage />
        <Articleslistpage />
        <ArticlePage />
      </div>
    </div>
  );
}

export default App;
