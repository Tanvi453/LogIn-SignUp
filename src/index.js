import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';
import { TableData } from './logInTable';
import { GetTable } from './signUpTable';


const root = ReactDOM.createRoot(document.getElementById('root'));

const layout = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/logInTable',
      element: <TableData />
    },
    {
      path: '/signUpTable',
      element: <GetTable />
    },
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={layout} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
