import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './assets/styles/main.css';

const router = createBrowserRouter([
	{
		path: process.env.NODE_ENV === 'production' ? "/color-comparison/" : "/",
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);