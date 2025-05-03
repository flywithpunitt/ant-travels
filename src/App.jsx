import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import CharDhamYatra from './pages/CharDhamYatra';
import DoDham from './pages/DoDham';
import Badrinath from './pages/Badrinath';
import Kedarnath from './pages/Kedarnath';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chardham" element={<CharDhamYatra />} />
          <Route path="/dodham" element={<DoDham />} />
          <Route path="/badrinath" element={<Badrinath />} />
          <Route path="/kedarnath" element={<Kedarnath />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
