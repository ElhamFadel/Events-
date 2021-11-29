import React from 'react'
import {EventList} from '../../components'
import { getFeaturedEvents } from '../../data';

const Index: React.FC = ({}) => {
   const items =  getFeaturedEvents()
        return (
            <div>
                <h1>Events</h1>
                <EventList  events={items}/>
            </div>
        );
}
export default Index;