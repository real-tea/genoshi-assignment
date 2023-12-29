import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileDashboard from './components/ProfileDashboard';
import PricingPage from './components/PricingPage';
import Navbar from './components/Navbar';



function App() {
  return (
    <Router>
    <div className="bg-gray-900">
      <Navbar />
      <div className="container mx-auto pt-16">
        <Routes>
          <Route path="/" element={<ProfileDashboard />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;