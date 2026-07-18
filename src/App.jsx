import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Legal from './pages/Legal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        {/* We can map /privacy-policy and /terms-and-conditions to the same component and handle tabs via URL parameters if needed, or just let Legal handle it internally. Let's add them as direct routes pointing to Legal with a prop or just let Legal read the path. */}
        <Route path="/privacy-policy" element={<Legal initialTab="Privacy Policy" />} />
        <Route path="/terms-and-conditions" element={<Legal initialTab="Terms and Conditions" />} />
      </Routes>
    </BrowserRouter>
  );
}
