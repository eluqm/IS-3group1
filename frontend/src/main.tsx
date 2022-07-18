import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import { 
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import Dashboard from './routes/Dashboard/Dashboard';
import About_C4P from './routes/About_C4P/About_C4P';
import SignUp from './routes/SignUp/SignUp'
import Login from "./routes/Login/Login";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/c4p" element={<About_C4P />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
