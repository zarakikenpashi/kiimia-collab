import { Filtre } from "../../components/Filtre"
import { Results } from "../../components/Results"
import { Header } from "../../components/Header"

export const Order = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl p-6">
        <Filtre />
        <Results />
      </div>
    </>
  )
}