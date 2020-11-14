
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Style from './style'

const Header = () => {
    const [showBetSlip, setShowBetSlip] = useState(false)

    const showHideBetSlip = () => {
        setShowBetSlip(!showBetSlip)
    }

    return(
        <>
            <header className={Style.headerContainer}>
                <div className={Style.rightSide}>betsport</div>
                <div className={Style.leftSide} onClick={showHideBetSlip}><FontAwesomeIcon icon={faBars}/></div>
            </header>
            {
                showBetSlip &&
                <>
                    <div className={Style.modalOverlay} onClick={showHideBetSlip}></div>
                    <div className={Style.betSlipContainer}>
                        <div></div>
                    </div>
                </>
            }
            
        </>
    )
}

export default Header