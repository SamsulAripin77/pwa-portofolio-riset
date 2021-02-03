import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import SertifikasiCreate from './pages/sertifikasi/SertifikasiCreate'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'

function App() {
  return (
      <BrowserRouter>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-2-xl sm:mx-auto">
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={Login}></Route>
          <Route path='/sertifikasi/create'>
              <SertifikasiCreate/>
          </Route>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
