import { Route, Routes } from "react-router-dom"
import PublicLayout from "../components/layouts/PublicLayout"
import { Home } from "../pages/public/Home"
import { Voyager } from "../pages/public/Voyager"
import { ServiceClient } from "../pages/public/ServiceClient"
import { Trajet } from "../pages/public/Trajet"
import { Partenaire } from "../pages/public/Partenaire"
import { Order } from "../pages/public/Order"
import { Booking } from "../pages/public/Booking"
import CheckoutPay from "../pages/public/CheckoutPay"


function PublicRoutes() {
  return (
    <Route path="" element={<PublicLayout  />}>
      <Route index element={<Home />} />
      <Route path="voyager" element={<Voyager />} />
      <Route path="serviceclient" element={<ServiceClient />} />
      <Route path="trajet" element={<Trajet />} />
      <Route path="partenaire" element={<Partenaire />} />
      <Route path="order" element={<Order />} />
      <Route path="reservation" element={<Booking />} />
      <Route path="checkout" element={<CheckoutPay />} />
    </Route>
  )
}

export default PublicRoutes