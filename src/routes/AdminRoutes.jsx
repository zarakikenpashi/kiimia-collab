import { Route } from "react-router-dom"
import AdminLayout from "../components/layouts/AdminLayout"
import Dashboard from "../pages/admin/Dashboard"
import Utilisateurs from "../pages/admin/Utilisateurs"
import UtilisateursPlus from "../pages/admin/UtilisateursPlus"
import Voyages from "../pages/admin/Voyages"
import VoyagesPlus from "../pages/admin/VoyagesPlus"
import ProtectedRoute from "../components/ProtectedRoute"

function AdminRoutes() {
  return (
    <Route 
      path="/admin" 
      element={
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminLayout />
      </ProtectedRoute >}>
        <Route index element={<Dashboard />} />
        <Route path="listeutilisateur" element={<Utilisateurs />} />
        <Route path="nouveauutilisateur" element={<UtilisateursPlus />} />
        <Route path="listevoyages" element={<Voyages />} />
        <Route path="nouveauvoyage" element={<VoyagesPlus />} />
    </Route>

  )
}

export default AdminRoutes