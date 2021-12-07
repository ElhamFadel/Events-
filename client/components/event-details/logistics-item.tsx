import React,{ReactNode} from 'react'
import classes from './logistics-item.module.css';

interface Props {
    icon: ReactNode;
    children: ReactNode | any;
}

export const LogisticsItem: React.FC<Props> = ({icon: Icon,children}) => {
        return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {Icon}
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}
export default LogisticsItem;
