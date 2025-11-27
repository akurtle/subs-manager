import './App.css'
import PageOne from './pages/onboarding/page_one'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTwo from './pages/onboarding/page_two';
import PageThree from './pages/onboarding/page_three';
import PageHandler from './pages/pageHandler';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/pageTwo" element={<PageTwo />} />
          <Route path="/pageThree" element={<PageThree />} />
          <Route path="/pageHandler" element={<PageHandler />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
