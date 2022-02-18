import '../fake-db'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom-old'

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
import Dashboard from './containers/Dashboard'

const App = () => {
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
                            component={(props) => (
                                <GetStarted2 fname={' Welcome'} {...props}>
                                    {props.children}
                                </GetStarted2>
                            )}
                            // render={(props) => (
                            //     <GetStarted2 text="2" {...props} />
                            // )}
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
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App
