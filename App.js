import React, {Suspense, useEffect, useState} from "react"
import  ReactDOM from "react-dom/client"
import Header from "./.src/components/Header";
import Body from "./.src/components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
//import About from "./.src/components/About";
import Contact from "./.src/components/Contact";
import Cart from "./.src/components/Cart";
import RestrauntDetailPage from "./.src/components/RestrauntDetailPage";
import Error from "./.src/components/Error";
import { lazy } from "react";
import UserContext from "./utls/UserContext";
import { Provider } from "react-redux";
import Appstore from "./utls/Appstore";


const AppLayout =() => {
    const[userName, setUserName] = useState()
    useEffect(() => {
        const data = {
            name: 'Akshay'
        }
        setUserName(data.name)
    },[])
    return(
        <div>
            <Provider store={Appstore}>
            <UserContext.Provider value={{loggedInuser: userName, setUserName}}>
            <Header/>
            <Outlet/>
            </UserContext.Provider>
            </Provider>

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
{
    path: '/cart',
    element: <Cart/>
},
],
}
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}><AppLayout/></RouterProvider>)