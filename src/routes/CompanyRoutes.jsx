import { Route } from "react-router-dom"
import CompanyLayout from "../components/layouts/CompanyLayout"
import Dashboard from "../pages/company/Dashboard"
import Orders from "../pages/company/Orders"
import Trajets from "../pages/company/Trajets"
import Stats from "../pages/company/Stats"

function CompanyRoutes() {
  return (
    <Route path="compagnie" element={<CompanyLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="orders" element={<Orders />} />
      <Route path="trajets" element={<Trajets />} />
      <Route path="stats" element={<Stats />} />
    </Route>
  )
}

export default CompanyRoutes