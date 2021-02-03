import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SertifikasiCreate from './pages/sertifikasi/SertifikasiCreate'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import UserDashboard from './pages/auth/UserDashboard'
import AdminDasboard from './pages/auth/AdminDasboard'

function App() {
  return (
      <BrowserRouter>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-2-xl sm:mx-auto">
        <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route  path="/admin" component={AdminDasboard}></Route>
        <Route  path="/user" component={UserDashboard}></Route>
          <Route path='/sertifikasi/create'>
              <SertifikasiCreate/>
          </Route>
        </Switch>
        </div>

      </div>
      </BrowserRouter>
  );
}

export default App;
