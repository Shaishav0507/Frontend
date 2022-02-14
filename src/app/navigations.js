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
        path: '/material/buttons',
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
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Payments',
                path: '/material/checkbox',
                iconText: 'D',
            },
        ],
    },
    {
        name: 'Purchases',
        icon: 'shopping',
        children: [
            {
                name: 'Bills',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Receipts',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Vendors',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Vendors Invoices',
                path: '/material/checkbox',
                iconText: 'D',
            },
        ],
    },
    {
        name: 'Expenses',
        path: '/dashboard/',
        icon: 'money',
    },
    {
        name: 'Pricing Plan',
        path: '/dashboard/',
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
