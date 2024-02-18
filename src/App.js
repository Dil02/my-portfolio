import './App.css';
import { HashRouter as Router} from 'react-router-dom'; /* Changed from BrowserRouter to HashRouter due to GitHub Pages */
import { AnimatedRoutes } from './Components/AnimatedRoutes.js';
import { PageFooter } from './Components/PageFooter.js';
import { PageNavbar } from './Components/PageNavbar.js';

/*
Changes to get React app working with GitHub Pages:
- Using Hash Router instead of BrowserRouter
- 'href' attributes in PageNavbar now begin with '#'
- Added '"homepage": "http://dil02.github.io/my-portfolio/#" ' in package.json
- Added ' "predeploy": "npm run build", "deploy": "gh-pages -d build",' in package.json
- Added 'process.env.PUBLIC_URL' to src imports for all images located in the public folder
*/

function App() {
  return (
    <div className="App">
      <PageNavbar></PageNavbar>
      <Router>
        <AnimatedRoutes></AnimatedRoutes>
      </Router>
      <PageFooter></PageFooter>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
    </div>

// Don't use tag selectors in CSS! Otherwise, strange things happen!

  );
}

export default App;
