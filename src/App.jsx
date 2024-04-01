import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import SearchPage from "./pages/SearchPage";
import BestSellerPage from "./pages/BestSellerPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import ContactusPage from "./pages/ContactusPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";

import { loader as categoryLoader } from "./components/Header";
import { loader as itemsLoader } from "./pages/Products";
import { loader as searchLoader } from "./pages/SearchPage";
import { loader as bestSellerLoader } from "./pages/BestSellerPage";
import { loader as ProductDetailLoader } from "./pages/ProductPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		id: "headerData",
		element: <Layout />,
		loader: categoryLoader,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "shop",
				element: <Shop />,
				errorElement: <ErrorPage />,
				children: [
					{
						loader: itemsLoader,
						index: true,
						element: <Products />,
					},
					{
						path: ":category",
						loader: itemsLoader,
						element: <Products />,
					},
				],
			},
			{
				path: "search",
				element: <SearchPage />,
				loader: searchLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: "best-seller",
				element: <BestSellerPage />,
				loader: bestSellerLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: "products/:productId",
				element: <ProductPage />,
				loader: ProductDetailLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
				errorElement: <ErrorPage />,
			},

			{ path: "checkout", element: <Checkout />, errorElement: <ErrorPage /> },
			{
				path: "/contact-us",
				element: <ContactusPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
