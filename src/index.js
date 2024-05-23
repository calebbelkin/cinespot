import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './MainPage';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import Login from './login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mainpage',
    element: <MainPage />
  }, 
  {
    path: '/login', 
    element: <Login />
  }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}> 
        <RouterProvider  router={router} store={store}/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
