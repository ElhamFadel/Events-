import React from 'react'
import Link from  'next/link'
import classes from './button.module.scss'
interface buttonProps {
    children: any,
    link:string
}

export const Button: React.FC<buttonProps> = ({link,children}) => {
        return (
           <Link href={link}>
               <a className={classes.button}>{children}</a></Link>
        );
}