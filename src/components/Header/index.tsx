
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Style from './style'
import BetSlip from '../BetSlip'

const Header = () => {
    const [showBetSlip, setShowBetSlip] = useState(false)

    const showHideBetSlip = () => {
        setShowBetSlip(!showBetSlip)
    }

    return(
        <>
            <header className={Style.headerContainer}>
                <div className={Style.rightSide}>betsport</div>
                <div data-testid="menu" className={Style.leftSide} onClick={showHideBetSlip}><FontAwesomeIcon icon={faBars}/></div>
            </header>
            {
                showBetSlip &&
                <BetSlip showHideBetSlip={showHideBetSlip} />
            }
            
        </>
    )
}

export default Header