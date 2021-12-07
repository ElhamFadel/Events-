import React from 'react'
import {EventList} from '../../components'
import { EventSearch } from '../../components/events/EventSearch';
import { getAllEvents } from '../../data';
import { NextRouter, useRouter } from 'next/router';
const AllEvents: React.FC = ({}) => {
    const router: NextRouter = useRouter();
    function findEventHandler (selectedYear:string|undefined,selectedMonth:string|undefined) {
        router.push(`/events/${selectedYear}/${selectedMonth}`)
    }
   const events = getAllEvents();
        return (
            <div>
                <EventSearch onSearch={findEventHandler} />
                <EventList  events={events}/>
            </div>
        );
}
export default AllEvents;