import React from 'react'
import Link from 'next/link'
import styles from "./Buttons.module.css"

export const ButtonAction = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className={styles.button}>
            {children}
        </div>
    )
}


export const ButtonLinks = ({ children, href = "" }) => {
    return (
        <Link className={styles.button} href={href}>
            {children}
        </Link>
    )
}