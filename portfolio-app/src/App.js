import './App.css';
import About from './components/About';
import EducationDetails from './components/EducationDetails';
import Navbar from './components/Navbar'
import WorkExperiences from './components/Work-Experiences';

function App() {
  return (
    <div className='page-content'>
      <Navbar />
      <div className="profile-content">
        <About />
        <EducationDetails />
        <WorkExperiences />
      </div>
    </div>
  );
}

export default App;
