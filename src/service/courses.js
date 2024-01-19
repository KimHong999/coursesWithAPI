import { api } from "../util/api"


export const list= async() =>{
    const response = await api.get('/courses')
    return response.data
}

export const create = async(newCourse) => {
    const response = await api.post('/courses', newCourse)
    return response.data
}


export const destroy = async(id) => {
    const response = await api.delete(`courses/${id}`)
    return response.data
}

export const update = async (id, courses) => {
    const response = await api.put(`courses/${id}`, courses)
    return response.data
}
