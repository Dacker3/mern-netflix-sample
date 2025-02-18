import axios from "axios"
import { ENV_VARS } from "../config/envVars.js"

export const fetchFromTMDB = async (url) => {
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + ENV_VARS.TPMD_API_KEY
        }
    };

    const response = await axios.get(url, options)

    if (response.status !== 200) {
        throw new Error('failed to fetch from TMDB' + response.statusText)
    }

    return response.data
}