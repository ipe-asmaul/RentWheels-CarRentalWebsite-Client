import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Root from '../Layouts/Root'

const routes = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage/>,
      Component: Root,
      children: [
        {
          index:true,
          Component: Home,
        }
      ]
    }
])

export default routes