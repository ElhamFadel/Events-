
import React from 'react'
import classes from './event-content.module.css';
interface Props {
  children: React.ReactNode | any;
}

const EventContent: React.FC<Props> = ({children}) => (
   <section className={classes.content}>
      {children}
    </section>
)

export default EventContent;