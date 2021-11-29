import React from 'react'
import classes from './event-summary.module.css';

interface Props {
    title: string | undefined;  
}

const EventSummary: React.FC<Props> = ({title}) => {
        return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}
export default EventSummary;