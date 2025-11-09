import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Root from '../Layouts/Root'
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCar from "../pages/AddCar";
import MyListing from "../pages/MyListing";
import MyBookings from "../pages/MyBookings";

const routes = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage/>,
      Component: Root,
      children: [
        {
          index:true,
          Component: Home,
        },
        {
          path:'/login',
          Component: Login
        },
        {
        path: '/register',
        Component: Register
        },
        {
          path:'/addcar',
          Component: AddCar
        },
        {
          path:'/listing',
          Component: MyListing
        },
        {
          path:'/bookings',
          Component: MyBookings
        }
        
      ]
    }
])

export default routes