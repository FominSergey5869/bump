import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import WelcomPage from './pages/WelcomePage/WelcomPage'

import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import Bump from './pages/Bump/BumpPage'

import Notification from './components/Notification/Notification'
import { fetchUser } from './store/user/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className='App'>
      <Notification />
      <Switch>
        <Route path='/welcome' component={WelcomPage} />
        <Layout>
          <Route path='/home' component={Home} />
          <Route path='/bump/:id' component={Bump} />
        </Layout>
      </Switch>
    </div>
  )
}

export default App
