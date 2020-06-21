import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './Components/Nav/Navbar'
import { routes } from './routes'
import './App.module.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={() => <route.component />}
              exact={route.isExact}
            />
          ))}
          <Redirect from='*' to='/404' />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
