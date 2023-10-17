import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import Layout from '../pages/Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout></Layout>,
		children: [
			{
				index: true,
				element: <HomePage></HomePage>,
			},
		],
	},
])
