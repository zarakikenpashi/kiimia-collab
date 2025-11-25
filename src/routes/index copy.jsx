// import AdminRoutes from "./AdminRoutes"
import { Routes } from "react-router-dom"
import AuthRoutes from "./AuthRoutes"
import CompanyRoutes from "./CompanyRoutes"
// import PublicRoutes from "./PublicRoutes"

function AppRoutes() {
  return (
    <Routes>
      {/* <PublicRoutes />
      
      <AdminRoutes /> */}
      {CompanyRoutes()}
      {AuthRoutes()}
    </Routes>
  )
}

export default AppRoutes
