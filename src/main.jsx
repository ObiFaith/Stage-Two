import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './index.css'
import { Cart, Home, NotFound, Checkout, Layout, Products } from '.'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path='/' element={<Home />} />
			<Route index path="/product" element={<Products />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/checkout' element={<Checkout />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
