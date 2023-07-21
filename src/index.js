import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './Components/about';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";

  const route1 = createBrowserRouter([
	{
	  path: "/",
	  element: <App/>,
	},
  ]);

  const route2 = createBrowserRouter([
	{
	  path: "/about",
	  element: <div>Hello there</div>,
	},
  ]);
  

  ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
	  <RouterProvider router={route1} />
	  <RouterProvider router={route2} />
	</React.StrictMode>
  );