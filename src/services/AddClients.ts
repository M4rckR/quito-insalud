import axios from "axios"
// import { z } from "zod"
import { Client } from "../types"

const url = import.meta.env.VITE_SHEETS_ADD_CLIENT_KEY

export const AddClients = async(datos:Client) => {
    const formatDatos = [datos]

    try {
        const {data} = await axios.post( url, formatDatos, {
            headers: { "Content-Type": "application/json" } 
        } )

        return data
    }
    catch(error) {
        console.log(error)
        throw error
    }

}