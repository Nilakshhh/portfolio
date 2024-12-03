import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import InfoCard from './components/InfoCard';
import ProjectInfoCard from './components/ProjectInfoCard';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <InfoCard />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <ProjectInfoCard />
            </Layout>
          }
        />
        
        <Route path="/no-layout" element={<ProjectInfoCard />} />
      </Routes>
    </Router>
  );
}

export default App;
