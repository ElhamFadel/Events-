import React from 'react'
import Link from  'next/link'
import classes from './button.module.scss'
interface buttonProps {
    children: any,
    link:string,
    onClick:React.MouseEventHandler<HTMLButtonElement> | undefined,
}

const Button: React.FC<buttonProps> = ({link,children,onClick}) => {
        return link ? (
            
           <Link href={link}>
               <a className={classes.btn}>{children}</a>
            </Link>
        ) : (
            <button className={classes.btn} onClick={onClick}>{children}</button>
}
export default Button;