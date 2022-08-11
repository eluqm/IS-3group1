import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './user/Home';
import Dashboard from './admin/Dashboard';

import Login from './user/routes/Login/Login';
import Signup from './user/routes/SignUp/SignUp';
import CallForPapers from './user/routes/CallForPapers/CallForPapers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="callforpapers" element={<CallForPapers />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
