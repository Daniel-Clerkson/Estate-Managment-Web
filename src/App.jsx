import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Homepage from './pages/Home'
import './index.css'
import Login from './pages/Login'
import Estate from './pages/Estate'


const App = () => {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path='/estate/:id' element={<Estate />} />
          <Route path="/" element={<Login />} />
        </Route>
      )
  );

  return <RouterProvider router={router} />
}

export default App