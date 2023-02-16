import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Login from './pages/Login';
import Landing from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path='/home' element={<ProtectedRoute page={<Home />} />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
