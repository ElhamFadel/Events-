import React,{Fragment} from 'react'
import {useRouter} from "next/router"
import { getFilteredEvents } from '../../data';
import { EventList } from '../../components';
import { Button } from '../../components/ui';

 const FilterEventPage: React.FC = ({}) => {
    const router = useRouter()
    const {slug} = router.query;
    if(!slug) return <h1>Loading ...</h1>

   const year:number = slug&& +slug[0]
   const month:number = slug&& +slug[1]
   if(isNaN(year) || isNaN(month)|| year<2021 || year>2030 || month<1 || month>12){
        return (
           <>
           <p>Invalid filter </p>
           <Button link={'/events'}>Back to events</Button>
           </>
        )
   }
      const eventsItem = getFilteredEvents({year,month})
             return (
           <Fragment>
                <div className="center">
                <Button link={'/events'}>Back to events</Button>
                <h1>Events in {year}/{month}</h1>
                {
                     eventsItem.length?<EventList  events={eventsItem} />
                     :
                     <p>No events found</p>
                }
                </div>
              </Fragment>
               
        )
}
export default FilterEventPage