import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import NavBar from './components/layout/NavBar';
import Message from './components/layout/Message'

//pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Recovery from './pages/auth/recovery';
import Home from './templates/home';

//context
import { UserProvider } from './context/UserContext'


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Message />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/Recovery'>
            <Recovery />
          </Route>
          <Route path='/'  >
            <Login />
          </Route>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
