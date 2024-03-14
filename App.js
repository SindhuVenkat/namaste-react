import React, {Suspense} from "react"
import  ReactDOM from "react-dom/client"
import Header from "./.src/components/Header";
import Body from "./.src/components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
//import About from "./.src/components/About";
import Contact from "./.src/components/Contact";
import RestrauntDetailPage from "./.src/components/RestrauntDetailPage";
import Error from "./.src/components/Error";
import { lazy } from "react";

const AppLayout =() => {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const About = lazy(() => import("./.src/components/About"))

const router = createBrowserRouter([{
    path:'/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
{
path:'/',
element: <Body/>,
},

{
    path: '/about',
    element: <About/>
},
{
    path: '/restraunt/:resId',
    element: <RestrauntDetailPage/>
},
{
    path: '/contact',
    element: <Contact/>
},
],
}
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}><AppLayout/></RouterProvider>)