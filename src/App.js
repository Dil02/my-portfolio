import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { AnimatedRoutes } from './Components/AnimatedRoutes.js';
import { PageFooter } from './Components/PageFooter.js';
import { PageNavbar } from './Components/PageNavbar.js';

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
