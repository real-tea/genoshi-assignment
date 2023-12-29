import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileDashboard from './components/ProfileDashboard';
import PricingPage from './components/PricingPage';
;



function App() {
  return (
    <Router>
      <div className="bg-gray-900 ">
        <h1 className="text-2xl font-bold mb-4">Genoshi.io</h1>
        <Routes>
          <Route path="/" element={<ProfileDashboard />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;