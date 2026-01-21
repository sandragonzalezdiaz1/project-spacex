import { Heading } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";
import { useState, useEffect } from "react";
import * as API from "../services/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    // Funcion asincrona que devuelve una Promise
    // then() se ejecuta cuando la Promise se resuelve correctamente
    API.getAllLaunches().then(setLaunches).catch(console.log);
    // Es lo mismo que poner .then(data => {  setLaunches(data)   })
  }, [])

  return (
    <>
      <Heading as="h1" size="lg" m={4} align="center">
        SpaceX Launches
      </Heading>
      { launches.length == 0 ? (<div>Loading...</div>) : (
        <section>
          {launches.map((launch, index) => (
            <LaunchItem
              key={`${launch.flight_number}-${index}`}
              launch={launch}
            ></LaunchItem>
          ))}
        </section>
      )}
    </>
  )
}
