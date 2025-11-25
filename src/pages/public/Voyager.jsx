import { ApplicationLinks } from "../../components/ApplicationLinks"
import { Benefits } from "../../components/Benefits"
import { DestinationTab } from "../../components/DestinationTab"
import { Header } from "../../components/Header"
import { Parteners } from "../../components/Parteners"
import { VisibiltyLogo } from "../../components/VisibilityLogo"

export const Voyager = () => {
  return (
    <>
      <Header />
      <Benefits />
      <ApplicationLinks />
      <DestinationTab />
      <VisibiltyLogo />
      <Parteners />
    </>
  )
}