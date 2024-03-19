import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin from "./pages/Admin/Admin";
import Public from "./pages/Public/Public"
import Layout from "./pages/Layout";
import EditAT from "./pages/Admin/EditAT";
import Table from "./pages/Admin/Table";
import PublicTable from './pages/Public/PublicTable';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path='PublicTable' element={<PublicTable />} />
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
