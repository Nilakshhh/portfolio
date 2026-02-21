import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import InfoCard from './components/InfoCard';
import ProjectInfoCard from './components/ProjectInfoCard';
import Layout from './Layout';
import ExperienceInfoCard from './components/ExperienceInfoCard';
import SkillInfoCard from './components/SkillInfoCard';
import ThoughtInfoCard from './components/ThoughtInfoCard';
import BlogPage from './blog/slug/page'

function App() {
  return (
    <Router>
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
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
