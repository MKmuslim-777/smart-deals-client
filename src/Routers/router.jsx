import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Components/Home/Home';
import AllProducts from '../Components/AllProducts/AllProducts';
import AuthLayouts from '../Layouts/Authentication/AuthLayouts';
import Login from '../Layouts/Authentication/Login';
import Register from '../Layouts/Authentication/Register';
import MyProducts from '../MyProDucts/MyProducts';
import MyBids from '../MyBids/MyBids';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/allProducts",
                Component: AllProducts
            },
            {
                path: "/myProducts",
                element: <MyProducts></MyProducts>
            },
            {
                path: "/myBids",
                element: <MyBids></MyBids>
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayouts,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])

export default router;