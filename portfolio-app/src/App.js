import './App.css';
import About from './components/About';
import EducationDetails from './components/EducationDetails';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import References from './components/References';
import Skills from './components/Skills';
import WorkExperiences from './components/Work-Experiences';

function App() {
  return (
    <div className='page-content'>
      <Navbar />
      <div className="profile-content">
        <About />
        <EducationDetails />
        <WorkExperiences />
        <Projects />
        <Skills />
        <References />
      </div>
    </div>
  );
}

export default App;
