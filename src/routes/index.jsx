import React from 'react'
import {useRoutes} from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('../routes/home/Home'))
const Cart = lazy(() => import('../routes/cart/Cart'))

const RoutesController = () => {
  return useRoutes([
      {
        path: '/',
        element: <Suspense fallback={<div className='w-full h-screen flex justify-between items-center'><div className="loader"></div></div>}>
            <Home />
        </Suspense>
      },
      {
        path: '/cart',
        element: <Suspense fallback={<div className='w-full h-screen flex justify-between items-center'><div className="loader"></div></div>}>
            <Cart />
        </Suspense>
      }
  ])
}

export default RoutesController