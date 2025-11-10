import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Root from '../Layouts/Root'
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCar from "../pages/AddCar";
import MyListing from "../pages/MyListing";
import MyBookings from "../pages/MyBookings";
import AllCars from "../pages/AllCars";
import CarDetails from "../pages/CarDetails";
import App from "../App";
import LoadingAnimation from "../components/LoadingAnimation";
import PrivateRoute from "../private-routes/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=> fetch('https://rent-wheel-server.vercel.app/featured')
           ,
        hydrateFallbackElement: <LoadingAnimation />

      },
      {
        path: '/cars',
        Component: AllCars,
        loader: () => fetch('https://rent-wheel-server.vercel.app/cars'),
        hydrateFallbackElement: <LoadingAnimation />
      },
      {
        path: '/car/:id',
        element: <PrivateRoute><CarDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://rent-wheel-server.vercel.app/car/${params.id}`),
        hydrateFallbackElement: <LoadingAnimation />

      },
      {
        path: '/details',
        element: <PrivateRoute><CarDetails/></PrivateRoute>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/addcar',
        element: <PrivateRoute><AddCar/></PrivateRoute>
      },
      {
        path: '/listing',
        element: <PrivateRoute><MyListing /></PrivateRoute>,

      },
      {
        path: '/bookings',
        element: <PrivateRoute><MyBookings/></PrivateRoute>
      }

    ]
  },
  {
    path: '/test',
    Component: App
  },
  {
    path: '*',
    Component: ErrorPage
  }
])

export default routes