import React from 'react'
import {EventList} from '../../components'
import { getAllEvents } from '../../data';

const AllEvents: React.FC = ({}) => {
   const events = getAllEvents();
        return (
            <div>
                <EventList  events={events}/>
            </div>
        );
}
export default AllEvents;