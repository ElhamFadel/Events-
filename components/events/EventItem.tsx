import React,{useEffect} from 'react'
import Link from  'next/link'
import Image from 'next/image'
import { IconDate,ArrowRight,Address} from "../icons"
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
        console.log(event)
        const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
       
        const formatteAddress = location.replace(', ','\n');
        const exploreLink = `/events/${id}`;
        return (
            <li className={classes.item}> 
                 <Image src={`/`+image} alt={title} width={1000} height={1000} />
                     <div className={classes.content}>
                        <h2>{title}</h2>    
                    </div>
                    <div className={classes.date}>
                        <IconDate />
                      <time>{humanReadableDate}</time>
                      </div>
                        <div className={classes.address}>
                            <Address/>
                            <address>{formatteAddress}</address>
                        </div>
                        <div className={classes.actions}>
                            <Link href="/">
                                <>
                               <span>Explore Event</span>
                               <span className={classes.icon}><ArrowRight /></span> 
                                 </>
                                </Link>
                        </div>
            </li>
        );
}
export default EventItem;