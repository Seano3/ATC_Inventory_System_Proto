import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from "./pages/Admin";
import Public from "./pages/Public"
import Layout from "./pages/Layout";
import EditAT from "./pages/Admin/EditAT";
import Table from "./pages/Admin/Table";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="Admin/" element={<Admin />}>
            <Route path="EditAT" element={<EditAT />} />
            <Route path="Table" element={<Table />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);