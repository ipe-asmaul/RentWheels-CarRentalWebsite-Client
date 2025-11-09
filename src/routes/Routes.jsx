import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Root from '../Layouts/Root'
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        
      ]
    }
])

export default routes