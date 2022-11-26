import './App.css';
import Navbar from './components/Navbar'
import About from './components/About';
import EducationDetails from './components/EducationDetails';
import WorkExperiences from './components/Work-Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';
import References from './components/References';
import ContactForm from './components/ContactForm';

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
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
