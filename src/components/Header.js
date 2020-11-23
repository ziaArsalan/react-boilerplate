import React from 'react'
import { ColorScheme } from '../enums'

function Header() {
    return (
        <div className="WalletlyHeader ml-xs-15 mr-xs-15 ml-md-100">
            <div className="mt-26 mb-26">
                <img src="/assets/img/walletlyLogo.png" width="40px" className="pb-9" alt="walletly"/>
                <span className={ColorScheme["4f4f4f"] + 'fs-18 ml-7'}>Walletly</span>
            </div>
        </div>
    )
}

export default Header
