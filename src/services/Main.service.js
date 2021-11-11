import * as localForage from 'localforage'

const getTokenHeader = async () => {
    const token = await localForage.getItem('token')
    return { 'x-auth-token': 'Bearer ' + token }
}

const MainService = {
    getTokenHeader
}

export default MainService