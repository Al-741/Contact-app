import React from 'react'
import styles from './contact-items.module.css';

// Reminder: Props in React can be seen parameters in regular JavaScript functions
// The data passed as props can be accessed in such a way:
// props.data1, props.data2, props.data3
export default function ContactItem(props) {
    
    return (
        // When using CSS sheets or CSS modules (CSS modules being scoped CSS sheets)
        // the CSS classes should be defined in the className attribute of the JSX/HTML tags
        <div className={styles.container}>
            <img src={props.data.image} />
            <div className={styles.info}>
                <span className={styles.label}>{props.data.name}, {props.data.lastname}</span>
                {/* <span className={styles.rating}>Rating: {props.data.rating.average}</span> */}
            </div>
        </div>
    )
}