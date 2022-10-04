import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes}from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    {/* <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastro" element={<CadastroUsuario />} /> */}
    </Routes>
    </div>
    <Footer />
    </ BrowserRouter >
       );
}

export default App;
