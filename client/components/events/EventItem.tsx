import React,{useEffect} from 'react'
import Link from  'next/link'
import Image from 'next/image'
import { IconDate,ArrowRight,Address} from "../icons"
import classes from './event-item.module.css'
import { Button } from '../ui'

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
                 <Image src={`/`+image} alt={title} width={230} height={230} />
                     <div className={classes.content}>
                        <h2>{title}</h2>    
                    
                    <div className={classes.date}>
                        <IconDate />
                      <time>{humanReadableDate}</time>
                      </div>
                        <div className={classes.address}>
                            <Address/>
                            <address>{formatteAddress}</address>
                        </div>
                        <div className={classes.action}>
                        <Button link={exploreLink}>
                                <>
                               <span>Explore Event</span>
                               <span className={classes.icon}><ArrowRight /></span> 
                                 </>
                        </Button>
                        </div>
                        </div>
            </li>
        );
}
export default EventItem;