import React, { Fragment } from 'react'
import {useRouter} from 'next/router'
import { getEventById } from '../../data';
import {EventLogistics,EventSummary,EventContent} from '../../components/event-details';
 const EventDetailPage: React.FC = ({}) => {
     const router = useRouter()
    const eventId = router.query.eventId;
   const event =  getEventById(eventId);
        return (
           <Fragment>
               {
                   event?(
                <Fragment>
                <EventSummary title={event.title} />
                <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
                </Fragment> 
                   ):(
                          <p>No event found</p>
                     )
               }
                
            </Fragment>
        )
}
export default EventDetailPage