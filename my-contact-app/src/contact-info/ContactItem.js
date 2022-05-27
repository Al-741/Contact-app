import React from 'react'
import styles from './contact.module.css';

export default function ContactItem(props) {
    const address = props.data.address.split(',')
    return (
        <div className={styles.contactPage}>
            <div className={styles.buttons}>
                <form action="http://localhost:3000">
                    <button>
                        ⬅️ Contacts
                    </button>
                </form>
                <button>
                    Edit
                </button>
            </div>
            <div className={styles.container}>
                <img src={props.data.picture} />
                <span className={styles.label}>{props.data.lastname.toUpperCase()} {props.data.firstname}</span>
                <div className={styles.info}>
                    <div className={styles.categories}>
                        <span className={styles.label}>Mobile</span>
                        <span className={styles.label}>{props.data.phone}</span>
                    </div>
                    <div className={styles.categories}>
                        <span className={styles.label}>Email</span>
                        <span className={styles.label}>{props.data.email}</span>
                    </div>
                    <div className={styles.categories}>
                        <span className={styles.label}>Address</span>
                        <span className={styles.label}>{address[0]}</span>
                        <span className={styles.label}>{address[1]}</span>
                    </div>
                    <div className={styles.categories}>
                        <span className={styles.label}>Date of Birth</span>
                        <span className={styles.label}>{props.data.dob}</span>
                    </div>
                    <div className={styles.categories}>
                        <span className={styles.label}>Job</span>
                        <span className={styles.label}>{props.data.job}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}