import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"




const DonorDashbord = () => {
  return (
   <>
   <Navbar/>
  <section className="align-element py-20">
    <Outlet/>
  </section>
   
   </>
  )
}

export default DonorDashbord