import { Route } from "react-router-dom"
import CompanyLayout from "../components/layouts/CompanyLayout"
import Dashboard from "../pages/company/Dashboard"
import Voyages from "../pages/company/Voyages"
import VoyagesPlus from "../pages/company/VoyagesPlus"
import Tickets from "../pages/company/Tickets"
import TicketsPlus from "../pages/company/TicketsPlus"
import ProtectedRoute from "../components/ProtectedRoute"

function CompanyRoutes() {
  return (
    <Route 
      path="/company" 
      element={
      <ProtectedRoute allowedRoles={['company']}>
        <CompanyLayout />
      </ProtectedRoute >}>
        <Route index element={<Dashboard />} />
        <Route path="listevoyages" element={<Voyages />} />
        <Route path="nouveauvoyage" element={<VoyagesPlus />} />
        <Route path="listetickets" element={<Tickets />} />
        <Route path="nouveauticket" element={<TicketsPlus />} />
    </Route>
  )
}

export default CompanyRoutes