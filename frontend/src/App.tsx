import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './user/Home';
import Dashboard from './admin/Dashboard';

import Login from './user/routes/Login/Login';
import Signup from './user/routes/SignUp/SignUp';
import CallForPapers from './user/routes/CallForPapers/CallForPapers';
import SearchCallForPapers from './user/routes/CallForPapers/SearchCallForPapers';
import C4PPage from './user/routes/CallForPapers/CallForPaperPage';
import Profile from './user/routes/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="callforpapers" element={<CallForPapers />} />
        <Route path="/callforpapers/:id" element={<C4PPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/search/:search" element={<SearchCallForPapers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
