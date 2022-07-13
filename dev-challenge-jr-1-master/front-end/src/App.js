import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Form from './components/Form';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
