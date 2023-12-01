import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

// --- JSX imports ------
import App from './App.jsx'

// ----- CSS for the packages -----
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-quill/dist/quill.snow.css";

// --- use react-redux ----
import { Provider } from "react-redux";
import store from "./redux/store";

// ----- RTK Query imports ----------
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { apiSlice } from './features/api/apiSlice.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
        <ToastContainer />
    </Provider>
  </BrowserRouter>,
)
