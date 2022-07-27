import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import Pricing from 'app/containers/Pricing/Pricing'

const AppTable = Loadable(lazy(() => import('./tables/AppTable')))
const InvForm = Loadable(lazy(() => import('./forms/AppForm')))
const CustForm = Loadable(lazy(() => import('./forms/CustomerForm')))
const VenForm = Loadable(lazy(() => import('./forms/VendorForm')))
const AppUsers = Loadable(lazy(() => import('./forms/Addstart')))
const EstiForm = Loadable(lazy(() => import('./forms/EstimateForm')))
// const AppCheckbox = Loadable(lazy(() => import("./checkbox/AppCheckbox")));
const AppSwitch = Loadable(lazy(() => import('./switch/AppSwitch')))
// const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
const AppAutoComplete = Loadable(
    lazy(() => import('./auto-complete/AppAutoComplete'))
)



const materialRoutes = [
    {
        path: '/material/table',
        element: <AppTable />,
    },
    {
        path: '/users',
        element: <AppUsers />,
    },
    {
        path: '/expenses',
        element: <AppAutoComplete />,
    },
    {
        path: '/vendors',
        element: <VenForm />,
    },
    {
        path: '/invoices',
        element: <InvForm />,
    },
    {
        path: '/customers',
        element: <CustForm />,
    },
    {
        path: '/estimates',
        element: <EstiForm />,
    },
    {
        path: '/material/switch',
        element: <AppSwitch />,
    },
    {
        path: '/prices/',
        element: <Pricing />,
    },
]

export default materialRoutes
