import axios from 'axios'

const usuarios = async () => {
    const {data} = await axios.get("https://api.escuelajs.co/api/v1/users")
    return data
}
