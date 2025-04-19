import { AppointmentCTA } from "../components/AppointmentCTA"
import { Benefits } from "../components/Benefits"
import { InfoTreatment } from "../components/InfoTreatment"
import { MainContact } from "../components/MainContact"
import { MainHero } from "../components/MainHero"
import { Questions } from "../components/Questions"
import { Testimonials } from "../components/Testimonials"
import { ButtonWspItem } from "../components/ui/ButtonWspItem"

export const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <MainHero/>
      <InfoTreatment/>
      <MainContact/>
      <Benefits/>
      <Testimonials/>
      <AppointmentCTA/>
      <Questions />
      <ButtonWspItem/>
    </div>
  )
}
