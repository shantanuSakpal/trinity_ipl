import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';


function App() {
  return (
    <div >
      <Router>
        <div className='min-h-screen'>
          <Routes>

            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
