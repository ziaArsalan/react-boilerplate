import React from 'react'
import { ColorScheme } from '../enums'

function WalletlyHeader() {
    return (
        <div className="WalletlyHeader">
            <div className="mt-26">
                <img src="/assets/img/walletlyLogo.png" width="40px" className="pb-9" alt="walletly"/>
                <span className={ColorScheme["4f4f4f"] + 'fs-18 ml-7'}>Walletly</span>
            </div>
        </div>
    )
}

export default WalletlyHeader
