import '../fake-db'
import React from 'react'
import { Provider } from 'react-redux'
// import { AllPages } from './routes/routes'
// import { MatxTheme } from 'app/components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { useRoutes } from 'react-router-dom'
// import { AuthProvider } from 'app/contexts/JWTAuthContext'
// import { SettingsProvider } from 'app/contexts/SettingsContext'

import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'

import Layout from './hocs/Layout'
import store from './store'
import GetStarted1 from './containers/GetStarted1'
import GetStarted2 from './containers/GetStarted2'
// import dashboardRoutes from './views/dashboard/DashboardRoutes'
import { MatxTheme } from './components'
import { SettingsProvider } from './contexts/SettingsContext'
import Dashboard from './containers/Dashboard'

const App = () => {
    // const all_pages = useRoutes(AllPages())

    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route
                            exact
                            path="/launchpad"
                            component={GetStarted1}
                        />
                        <Route
                            exact
                            path="/onboarding"
                            component={GetStarted2}
                        />
                        <Route
                            exact
                            path="/reset-password"
                            component={ResetPassword}
                        />
                        <Route
                            exact
                            path="/dashboard/default"
                            component={Dashboard}
                        />
                        <Route
                            exact
                            path="/password/reset/confirm/:uid/:token"
                            component={ResetPasswordConfirm}
                        />
                        <Route
                            exact
                            path="/activate/:uid/:token"
                            component={Activate}
                        />
                        <SettingsProvider>
                            <MatxTheme>
                                {/* <Route
                                    exact
                                    path="/dashboard/default"
                                    component={dashboardRoutes}
                                /> */}
                                {/* <AuthProvider>{all_pages}</AuthProvider> */}
                            </MatxTheme>
                        </SettingsProvider>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App
