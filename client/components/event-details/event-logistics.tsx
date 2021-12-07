import React from 'react'
import { IconDate,Address } from '../icons';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import Image from 'next/image';

interface Props {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

export const EventLogistics: React.FC<Props> = ({ date, address, image, imageAlt }) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    });
  const addressText = address.replace(', ', '\n');
    return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={IconDate}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={Address}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
export default EventLogistics;
