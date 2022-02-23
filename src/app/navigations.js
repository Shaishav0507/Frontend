export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    {
        label: 'Components',
        type: 'label',
    },
    {
        name: 'Users',
        path: '/users',
        icon: 'people',
    },
    {
        name: 'Sales',
        icon: 'trending_up',
        children: [
            {
                name: 'Estimates',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Invoices',
                path: '/invoices',
                iconText: 'B',
            },
            {
                name: 'Vendors',
                path: '/vendors',
                iconText: 'C',
            },
            {
                name: 'Customers',
                path: '/customers',
                iconText: 'D',
                //icon: 'people',
            },
        ],
    },
    {
        name: 'Expenses',
        path: '/expenses/',
        icon: 'money',
    },
    {
        name: 'Pricing Plan',
        path: '/prices/',
        icon: 'sell',
    },
    {
        label: 'PAGES',
        type: 'label',
    },
    {
        name: 'Session/Auth',
        icon: 'security',
        children: [
            {
                name: 'Sign in',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Sign up',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Forgot Password',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Error',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
]
