import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Body from './components/Body';
import Profile from './components/Profile';
import Shopdetails from './components/Shopdetails';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path :"/",
          element:<Body />
        },
        {
          path:"/about",
          element:<About/>,
          children:[
            {
              path:"profile",//children of children slash can be avoided
              element:<Profile/>,
            }
          ]
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        {
          path:"/shop/:Id",//"Symbol" is ":"dynamic routing that is id can be different
          element:<Shopdetails/>,
        },
      ],
    },
  ]);
root.render(<RouterProvider router={appRouter}></RouterProvider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
