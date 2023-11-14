import { Fragment } from "react"
import classes from './MeetupItem.module.css';
import Link from 'next/link';


const MeetupDetails = (props) => {
  return (
      <Fragment className={classes.item}>
          <h1 className={classes.title}>Meetup Details</h1>
          <div className={classes.image}>
            <img src={props.image}></img>
          </div>
          <div className={classes.content}>
              <h3>{props.title}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
          </div>
          <div className={classes.back}>
              <Link href='/'><a>Back</a></Link>
          </div>
          
    </Fragment>
  )
}

export default MeetupDetails

