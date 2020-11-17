import React, {useState, useEffect} from 'react';
import Event from '../Event'
import { getEvents } from '../../service/api'

const EventList = () => {
    const [events, setEvents] =  useState<ApiResponseType>([])

    useEffect(() => {
        setEvents(getEvents())
    }, [])

    return (
        <div data-testid="eventList" className="mx-auto px-6">
            {
            events.map( (event: EventType, i:number) => {
                if(event.markets.length === 0)
                return null
                
                return <Event key={`Event-${i}`} event={event} />
            })
            }
        </div>
    )
}

export default EventList