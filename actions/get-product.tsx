import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/`

const getProduct = async(id: string): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`)
    const data = await res.json()
    return data
} 

export default getProduct