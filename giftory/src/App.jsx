import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import GiftPage from './pages/GiftPages'; // Tu app actual movida a un archivo
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  // Inicializamos el token desde el localStorage
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userLogin, setUserLogin] = useState(localStorage.getItem('user'));

  function logIn(tokenRecibido, userRecibido){
    localStorage.setItem('token', tokenRecibido);
    setToken(tokenRecibido);
    localStorage.setItem('user', userRecibido);
    setUserLogin(userRecibido)
  }

  function logOut(){
    localStorage.removeItem('token');
    setToken(null);
    localStorage.removeItem('user');
    setUserLogin(null)

  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Protegida por el token */}
        <Route 
          path="/" 
          element={token ? <GiftPage token={token} logOut={logOut} userLogin={userLogin}/> : <Navigate to="/login" />} 
        />

        {/* Ruta de Login: Le pasamos setToken para que guarde la llave al entrar */}
        <Route 
          path="/login" 
          element={<LoginPage llenarToken = {logIn}/>} 
        />

        <Route 
          path="/register" 
          element={<RegisterPage llenarToken = {logIn}/>} 
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;