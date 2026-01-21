import { useParams, Link } from "react-router-dom"
import * as API from "../services/launches"
import { useEffect, useState } from "react"
import { Box, Text, Flex, Spacer, Badge } from "@chakra-ui/react"

export function LaunchDetail() {

    const { launchId } = useParams() // Extrae el parámetro de la URL
    const [ launch, setLaunch ] = useState({})

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log)
    }, [launchId])

    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            { Object.keys(launch).length === 0 ? (<div>Loading...</div>) : (
                <>
                <Flex display="flex">
                    <Text fontSize="2xl">
                        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                    </Text>
                    <Spacer />
                    <Badge p={2} colorPalette={launch.launch_success ? "green" : "red"}>
                        {launch.launch_success ? "Success" : "Failure"}
                    </Badge>
                </Flex>

                <Box>
                    Rocket: {""}
                    <Link to={`/rocket/${launch.rocket?.rocket_id}`}>
                        {launch.rocket?.rocket_name}
                    </Link>
                </Box>
                </>
            )}
        </Box>
    )
}