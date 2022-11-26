import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='page-content'>
      <Navbar />
      <div className="profile-content">
        <About />
      </div>
    </div>
  );
}

export default App;
