import React from 'react'
import EventItem from './EventItem'
import classes from './event-list.module.css'
interface Event{
    title : string,
    image : string,
    date : string,
    location : string,
    id : string,
}
interface EventListProps {
    events: Event[]
}
const EventList: React.FC<EventListProps> = ({events}) => {
       console.log(events)
        return (
            <div className={classes.list}>
                {
                    events.map(event => (<EventItem key={event.id} event={event} />))
                }
            </div>
        );
}
export default EventList