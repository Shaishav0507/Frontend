import React from 'react'
import { MatxTheme } from './../components'
import { SettingsProvider } from './../contexts/SettingsContext'
import { useRoutes } from 'react-router-dom'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { AllPages } from './../routes/routes'
import store from './../store'
import { Provider } from 'react-redux'

const Dashboard = () => {
    const all_pages = useRoutes(AllPages())

    return (
        <Provider store={store}>
            <SettingsProvider>
                <MatxTheme>
                    <AuthProvider>{all_pages}</AuthProvider>
                </MatxTheme>
            </SettingsProvider>
        </Provider>
    )
}

export default Dashboard
