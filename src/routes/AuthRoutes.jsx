import { Route } from "react-router-dom"
import AuthLayout from "../components/layouts/AuthLayout"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

function AuthRoutes() {
  return (
    <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
    </Route>
  )
}

export default AuthRoutes