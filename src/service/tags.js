import { api } from "../util/api"

export const list = async() => {
    const response = await api.get('/tags')
    return response.data
}

// export const createTags = async(newTags) =>{
//     const response = await api.post('/tags', newTags)
//     return response.data
// }