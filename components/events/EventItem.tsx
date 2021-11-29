import React from 'react'
import Link from  'next/link'
import classes from './event-item.module.css'
interface Event{
    title : string,
    image : string,
    date : string,
    location : string,
    id : string,
}
interface EventItemProps {
    event: Event,
}

const EventItem: React.FC<EventItemProps> = ({event}) => {
        const {title,image,date,location,id} = event;
        const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const formatteAddress = location.replace(', ','\n');
        const exploreLink = `/events/${id}`;
        return (
            <li className={classes.item}> 
                 <img src={image} alt={title} />
                     <div className={classes.content}>
                        <h2>{title}</h2>    
                    </div>
                    <div className={classes.date}>
                      <time>{humanReadableDate}</time>
                      </div>
                        <div className={classes.address}>
                            <address>{formatteAddress}</address>
                        </div>
                        <div className={classes.actions}>
                            <Link href="/">Explore Event</Link>
                        </div>
            </li>
        );
}
export default EventItem;