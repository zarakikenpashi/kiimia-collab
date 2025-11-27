import { Route } from "react-router-dom"
import AuthLayout from "../components/layouts/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import GuestRoute from "../components/GuestRoute"

function AuthRoutes() {
  return (
  <Route 
    path="/auth" 
    element={
      <GuestRoute>
        <AuthLayout />
      </GuestRoute>
    }
  >
    <Route index element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>
  )
}

export default AuthRoutes