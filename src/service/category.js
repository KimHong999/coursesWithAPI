
import { api } from "../util/api";

export const list = async()=>{
    const response = await api.get("/categories")
    return response.data
}

export const create = async(newCategory)=>{
    const response = await api.post("/categories", newCategory)
    return response.data
}

export const destroy = async(id)=>{
    const response = await api.delete(`categories/${id}`)
    return response.data
}

export const update = async(id, category)=>{
    const response = await api.put(`categories/${id}`, category)
    return response.data
}
