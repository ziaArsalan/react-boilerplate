import { enums } from '../enums'
import { utils } from '../utils'

const Services = (fn) => {
    return async ({toaster, message, error, ...props} = {}) => {
        try {
            const res = await fn(props)
            console.log('API - RESPONSE', res)
            toaster && utils.showToaster({title: 'Success', message: message || res.data.message, severity: 'success'})
            return { response : res.data}
        } catch (err) {
            console.log('API- ERROR', err.response ? err.response.data : err)

            // expire error : jwt expired
            if(err.response && err.response.status === enums.ResponseStatus.UNAUTHORIZED) {
                utils.showToaster({position: 'top-right', title: 'Error', message: error || 'session expired', severity: 'error'})
                setTimeout(utils.Logout, enums.TOASTER_DELAY)
                return { error: err.response ? err.response.data : err}
            }

            toaster && utils.showToaster({title: 'Error', message: error || err.response ? err.response.data.message : err.message, severity: 'error'})
            return { error: err.response ? err.response.data : err}
        }
    }
}

export {
    Services
}