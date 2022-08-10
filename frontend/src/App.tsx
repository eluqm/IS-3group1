import './App.css'

import {
  Routes, Route, BrowserRouter
} from 'react-router-dom';

import Home from './user/Home';
import Dashboard from './admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
