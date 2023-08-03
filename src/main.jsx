import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import AddCreator from './pages/AddCreator.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: ":id", 
        element: <ViewCreator/>
      },
      {
        path: "edit/:id",
        element: <EditCreator/>
      },
      {
        path: "show",
        element: <ShowCreators/>
      },
      {
        path: "/",
        element: <ShowCreators/>
      },
      {
        path: "add",
        element: <AddCreator/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
