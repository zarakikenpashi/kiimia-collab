import { Route } from "react-router-dom"
import AdminLayout from "../components/layouts/AdminLayout"
import Dashboard from "../pages/admin/Dashboard"
import Voyages from "../pages/admin/Voyages"
import VoyagesPlus from "../pages/admin/VoyagesPlus"
import ProtectedRoute from "../components/ProtectedRoute"
import NewPartner from "../pages/admin/NewPartner"
import Utilisateurs from "../pages/admin/Utilisateurs"
import NewAdministrator from "../pages/admin/NewAdministrator"
import EditeAdministrator from "../pages/admin/EditeAdministrator"

function AdminRoutes() {
  return (
    <Route 
      path="/admin" 
      element={
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminLayout />
      </ProtectedRoute >}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="listeutilisateur" element={<Utilisateurs />} />
        <Route path="nouveaupartenaire" element={<NewPartner />} />
        <Route path="nouveauadmin" element={<NewAdministrator />} />
        <Route path="aditeradmin/:id" element={<EditeAdministrator />} />
        <Route path="listevoyages" element={<Voyages />} />
        <Route path="nouveauvoyage" element={<VoyagesPlus />} />
    </Route>

  )
}

export default AdminRoutes