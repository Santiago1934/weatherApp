import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter} from "react-router-dom"
import { ToastContainer, toast }  from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <BrowserRouter>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
        pauseOnFocusLoss
        draggable
      />
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);
