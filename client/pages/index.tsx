import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {getFeaturedEvents} from "../data"
import { EventList } from '../components'
const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents()
  return (
    <div className={styles.container}>
        <EventList events={featuredEvents} />
    </div>
  )
}

export default Home
