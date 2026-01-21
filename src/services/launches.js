
const API_URL = "https://api.spacexdata.com/v3"

// Funcion asincrona que devuelve todos los lanzamientos
export async function getAllLaunches(){
    try {
        const response = await fetch(`${API_URL}/launches`)
        const data = response.json()
        return data
    } catch (error){
        console.error(error)
    }
   
}

// Funcion asincrona que devuelve un lanzamiento por su flight_number
export async function getLaunchByFlightNumber(flightNumber){
    try {
        const response = await fetch(`${API_URL}/launches/${flightNumber}`)
        const data = response.json()
        return data
    } catch (error){
        console.error(error)
    }
}