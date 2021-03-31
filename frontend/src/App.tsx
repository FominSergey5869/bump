import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from './pages/Signin'

import Layout from './layouts/Layout'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
