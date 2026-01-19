import * as API from "./services/launches"
import { useState, useEffect } from "react"
import logo from "./assets/logo-spacex.png"
import { Heading, Image } from "@chakra-ui/react"
import { LaunchItem } from "./components/LaunchItem"



function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)
  }, [])

 
  return (
    <>
    <Image src={logo} width={300} m={4}></Image>
    <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
    <section>
      {
      launches.map((launch, index) => (
       <LaunchItem  key={`${launch.flight_number}-${index}`} launch={launch}></LaunchItem>
      ))
      }
    </section>
    </>
  
  )
}

export default App
