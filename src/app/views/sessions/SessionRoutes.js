import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./../../containers/ResetPassword")));
const JwtLogin = Loadable(lazy(() => import("./../../containers/Login")));
const JwtRegister = Loadable(lazy(() => import("./../../containers/Signup")));

const sessionRoutes = [
    {
        path: '/session/signup',
        element: <JwtRegister />,
    },
    {
        path: '/session/signin',
        element: <JwtLogin />,
    },
    {
        path: '/session/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/session/404',
        element: <NotFound />,
    },
]

export default sessionRoutes
