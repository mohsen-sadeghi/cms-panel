import axios from "axios";
import { Product } from "../types/servers";


const client = axios.create({
    baseURL : "http://localhost:3000/"
})

export const getChartData = async () => {
    const {data} = await client("chart-data")
    return data
}

export const getAllProducts = async () => {
    const {data} = await client("products")
    return data
}