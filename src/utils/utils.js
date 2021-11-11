import * as localForage from 'localforage'
import ReactDOM from 'react-dom';
import Toaster from '../components/toaster/Toaster';

const Logout = () => localForage.clear().then(res => window.location.assign('/'))

const showToaster = ({position, title, message, severity}) => {
    const notifications = [{title, message, severity, progress: 0}]
    ReactDOM.render(<Toaster position={position} notifications={notifications} />, document.getElementById('Toaster'))
}

const getDate = (dateInMS, withTime=false) => {
    if(!dateInMS) return
    const timeOptions = {hour: '2-digit', minute: '2-digit'}
    return new Date(dateInMS).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year:'numeric', ...(withTime && timeOptions)}).split('/').join('-')
}

const booleanHasAnyValue = (boolean) => {
    return typeof(boolean) === 'boolean'
}

const getRandomNumber = (length = 8) => {
    return Math.floor(Math.pow(10, length-1) + Math.random()*Math.pow(10, length-1))
}

const invertColor = (hex, bw) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // http://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);

    function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

const getAvatar = ({firstName, lastName, fontSize, className, width, heigth, bgColor}) => {
    const randomNum  = getRandomNumber(6) // used for avatar background color
    const colorCode  = `#${randomNum}`
    const invertCode = invertColor(bgColor || colorCode)

    return (
        <div 
            className={className + ' border-radius-40'} 
            style={{
                width           : width ||'40px',
                height          : heigth ||'40px',
                backgroundColor : bgColor || colorCode,
                display         : 'flex',
                flexDirection   : 'column',
                justifyContent  : 'center',
                alignItems      : 'center',
                color           : invertCode,
                fontSize        : fontSize || '14px'
            }}
        >
            {   
                firstName ?
                lastName ? (firstName[0]+lastName[0]).toUpperCase() : (firstName[0]+firstName[1]).toUpperCase() :
                'AV'
            }
        </div>
    )
}

export {
    Logout,
    showToaster,
    getDate,
    booleanHasAnyValue,
    getAvatar
}