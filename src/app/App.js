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
import CustomerForm from './views/material-kit/forms/CustomerForm'
import AppForm from './views/material-kit/forms/AppForm'
import Pricing from './containers/Pricing/Pricing'
import Layout from './hocs/Layout'
import store from './store'
import { GetStarted1 } from './containers/GetStarted1'
import GetStarted2 from './containers/GetStarted2'
import Dashboard from './containers/Dashboard'
import { GSTForm } from './containers/GSTForm'
import VendorForn from './views/material-kit/forms/VendorForm'
import Addstart from './views/material-kit/forms/Addstart'
import EstimateForm from './views/material-kit/forms/EstimateForm'
import AppAutoComplete from './views/material-kit/auto-complete/AppAutoComplete'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/pricing" component={GSTForm} />
                        <Route exact path="/users" component={Addstart} />
                        <Route exact path="/expenses" component={AppAutoComplete} />
                        <Route exact path="/customers" component={CustomerForm} />
                        <Route exact path="/estimates" component={EstimateForm} />
                        <Route exact path="/invoices" component={AppForm} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/prices" component={Pricing} />
                        <Route exact path="/launchpad" component={GetStarted1} />
                        <Route exact path="/vendors" component={VendorForn} />
                        <Route exact path="/onboarding"
                            component={(props) => (
                                <GetStarted2 fname={' Welcome'} {...props}>
                                    {props.children}
                                </GetStarted2>
                            )}
                        />
                        <Route exact path="/reset-password" component={ResetPassword} />
                        <Route exact path="/dashboard/default" component={Dashboard} />
                        <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
                        <Route exact path="/activate/:uid/:token" component={Activate} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    )
}

export default App
