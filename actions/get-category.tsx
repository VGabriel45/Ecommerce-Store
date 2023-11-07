import { Category } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/`

const getCategory = async(id: string): Promise<Category> => {
    const res = await fetch(`${URL}/${id}`)
    const data = await res.json()
    return data
} 

export default getCategory