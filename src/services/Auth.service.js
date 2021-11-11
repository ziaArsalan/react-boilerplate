import axios from 'axios'
import { Handlers } from '../utils'
import MainService from './Main.service'
import env from '../config'
const service  = '/v1/auth'

const Login = async({payload}) => await axios.post(env.API_URL+service+'/login', payload)

const Signup = async({payload}) => await axios.post(env.API_URL+service+'/signup', payload)

const ForgotPass = async({payload}) => await axios.post(env.API_URL+service+'/forgot', payload)

const ResetPass = async({payload, token}) => await axios.post(env.API_URL+service+'/reset', payload, {headers: {'x-auth-token': 'Bearer '+token}})

const AuthService = {
    Login      : Handlers.Services(Login),
    Signup     : Handlers.Services(Signup),
    ForgotPass : Handlers.Services(ForgotPass),
    ResetPass  : Handlers.Services(ResetPass)
}

export default AuthService
