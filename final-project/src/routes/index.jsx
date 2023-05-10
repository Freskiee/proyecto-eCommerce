import { Routes, Route } from 'react-router-dom'
import { Home, Cart, Login, DashBoard, Signup } from '../pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex
