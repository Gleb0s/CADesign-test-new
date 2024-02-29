import ReactDOM from 'react-dom/client'
import "./assets/styles/index.scss";
import { MainPage } from './MainPage/index';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <MainPage/>
  </Router>
)
