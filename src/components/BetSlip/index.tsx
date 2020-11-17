import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Style from './style'
import { AppContext } from '../../context'
import Bet from '../Bet';

type Props = { 
    showHideBetSlip: () => void
}

const BetSlip: React.FC<Props> = ({showHideBetSlip}) => {
    const { state } = useContext(AppContext);

    return (
        <div data-testid="betSlip">
            <div data-testid="overlay" className={Style.modalOverlay} onClick={() => showHideBetSlip()}></div>
            <div className={Style.betSlipContainer}>
                    <div className={Style.iconContainer}>
                        <FontAwesomeIcon data-testid="closeIcon" icon={faTimes} onClick={() => showHideBetSlip()}/>
                    </div>
                    <div className={Style.betsContainer}>
                        {
                            state.bets.map(bet => <Bet key={bet.id} selection={bet} />)
                        }
                    </div>                    
            </div>
        </div>
    )
}

export default BetSlip