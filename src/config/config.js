import { Environment } from '../enums/enums'

const env = {
    // API_URL : 'https://displaycnft.io/api',
    API_URL : 'http://localhost:8080/api',
}

if(process.env.REACT_APP_ENV === Environment.DEVELOPMENT){
    // env.API_URL = 'https://displaycnft.io/api'
    env.API_URL = 'http://localhost:8080/api'
}

if(process.env.REACT_APP_ENV === Environment.STAGING){
  
}

if(process.env.REACT_APP_ENV === Environment.PRODUCTION){

}

export default env