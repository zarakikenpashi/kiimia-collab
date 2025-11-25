import { ApplicationLinks } from "../../components/ApplicationLinks"
import { Benefits } from "../../components/Benefits"
import { DestinationTab } from "../../components/DestinationTab"
import { HeroCarousel } from "../../components/HeroCarousel"
import { Parteners } from "../../components/Parteners"
import { VisibiltyLogo } from "../../components/VisibilityLogo"

export const Home = () => {
  return (
    <>
      <HeroCarousel />
      <Benefits />
      <ApplicationLinks />
      <DestinationTab />
      <VisibiltyLogo />
      <Parteners />
    </>
  )
}
