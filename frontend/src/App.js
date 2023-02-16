import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Login from './pages/Login';
import Landing from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';

function App() {
  return (
    <div className="p-2">
      <Router>
        <Navbar />
        <div className='min-h-screen'>
          <Routes>

            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<ProtectedRoute page={<Home />} />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
