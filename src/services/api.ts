import axios from "axios";
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

export const deleteProduct = async (id : number)=>{
    const {data} = await client.delete(`products/${id}`)
    return data
}

export const editProductHandle = async (id : string , product : IProductForm )=>{
    const {data} = await client.put(`products/${id}` , product)
    return data
}