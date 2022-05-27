import React from 'react'
import styles from './contact.module.css';

export default function ContactItem(props) {

    return (
        <div className={styles.container}>
            <img src={props.data.picture} />
            <div className={styles.info}>
                <span className={styles.label}>{props.data.lastname.toUpperCase()} {props.data.firstname}</span>
                <span className={styles.label}>Number: {props.data.phone}</span>
                <span className={styles.label}>Email: {props.data.email}</span>
                <span className={styles.label}>Address: {props.data.address}</span>
                <span className={styles.label}>Date of Birth: {props.data.dob}</span>
                <span className={styles.label}>Job: {props.data.job}</span>
            </div>
        </div>
    )
}