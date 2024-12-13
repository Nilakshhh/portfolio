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
import ExperienceInfoCard from './components/ExperienceInfoCard';
import SkillInfoCard from './components/SkillInfoCard';
import ThoughtInfoCard from './components/ThoughtInfoCard';

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
        <Route
          path="/experience"
          element={
            <Layout>
              <ExperienceInfoCard />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout>
              <SkillInfoCard />
            </Layout>
          }
        />
        <Route
          path="/thoughts"
          element={
            <Layout>
              <ThoughtInfoCard />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
