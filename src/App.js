import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './Home'

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
    </Router>

    </>
  );
}

export default App;
