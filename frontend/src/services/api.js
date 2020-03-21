import axios from 'axios'
const baseURL = 'https://moviegram-back.herokuapp.com'

export const insertUserToMongo = async data => {
    try {
        await axios.post(baseURL + '/users/', data)
    } catch (err) {
        console.log(err)
    }
}

export const getUser = async id => {
    try {
        await axios.get(baseURL + '/users/' + id)
    } catch (err) {
        console.log(err)
    }
}


export const getAllReviews = () => axios.get(baseURL + '/reviews')
