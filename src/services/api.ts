import axios from "axios";
import { IUser } from "../types/servers";
import { IOrderForm } from "../types/servers";
import { IAdmin } from "../types/servers";
interface IProductForm { 
    title: string,
    price: number,
    count: number,
    img: string,
    popularity: number,
    sale: number,
    colors: number,
    description: string,
}


const client = axios.create({
    baseURL : "http://localhost:3000/"
})

export const getChartData = async () => {
    const {data} = await client("chart-data")
    return data
}

export const getAllProducts = async (page ?: string) => {
    const {data} = await client(`products?_page=${page}&_per_page=7`)
    return data
}

export const deleteProduct = async (id : string)=>{
    const {data} = await client.delete(`products/${id}`)
    return data
}

export const editProductHandle = async (id : string , product : IProductForm )=>{
    const {data} = await client.put(`products/${id}` , product)
    return data
}

export const addProduct = async (newProduct)=> {
    const {data} = await client.post("products" , newProduct)
    return data
}


export const getAllUsers = async (page ?: string)=>{
    const {data} = await client(`users?_page=${page}&_per_page=5`)
    return data
}

export const deleteUser = async (id : string)=>{
    const {data} = await client.delete(`users/${id}`)
    return data
}

export const editUserHandle = async (id : string , product : IUser )=>{
    const {data} = await client.put(`users/${id}` , product)
    return data
}

export const getAllOrder = async (page ?: string)=>{
    const {data} = await client(`orders?_page=${page}&_per_page=3`)
    return data
}

export const deleteOrder = async (id : string)=>{
    const {data} = await client.delete(`orders/${id}`)
    return data
}

export const editOrderHandle = async (id : string , product : IOrderForm) => {
    const {data} = await client.put(`orders/${id}` , product)
    return data
}

export const getAllAdmin = async ()=>{
    const {data} = await client<IAdmin[]>("admin")
    return data
}