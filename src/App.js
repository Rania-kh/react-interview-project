import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom'
import Mainbar from './components/Mainbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Mainbar/>
      </Router>
      </>
  );
}

export default App;
