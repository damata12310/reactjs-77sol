import { LocalDiningOutlined } from '@mui/icons-material'
import React, { Suspense, lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProgressResponseCircular from './components/circularProgress/ProgressResponseCircular'

const Login = lazy(() => import('./view/login/Login'))
const BuscaCep = lazy(() => import('./view/buscaCep/BuscaCep'))

const token = localStorage.getItem('access_token')
const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: 'login', state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="mt-5 pt-5">
          <ProgressResponseCircular />
        </div>
      }
    ></Suspense>
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/" component={Login} /> */}
      <PrivateRoutes path="/busca-cep" component={BuscaCep} />
    </Switch>
  </Router>
)

export default Routes
