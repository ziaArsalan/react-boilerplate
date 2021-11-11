import axios from 'axios'
import { Handlers } from '../utils'
import MainService from './Main.service'
import env from '../config'
const service  = '/v1/user'

const getFilteredUsers = async({query}) => await axios.get(env.API_URL+service+'/filter?' + query)

const UserService = {
    getFilteredUsers : Handlers.Services(getFilteredUsers),
}

export default UserService
