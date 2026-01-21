
import logo from "./assets/logo-spacex.png"
import { Image } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { LaunchList } from "./components/LaunchList"
import { LaunchDetail } from "./components/LaunchDetail"
import { RocketDetail } from "./components/RocketDetail"


function App() {

  return (
    <>
    <Image src={logo} width={300} m={4}></Image>
    <Routes>
      <Route path="/" element={<LaunchList />}></Route>
      <Route path="launch/:launchId" element={<LaunchDetail />}></Route>
      <Route path="rocket/:rocketId" element={<RocketDetail />}></Route>
    </Routes>
    </>
  
  )
}

export default App
