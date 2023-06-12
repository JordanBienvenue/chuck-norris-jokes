import React from 'react'
import Link from 'next/link'
import styles from "./Buttons.module.css"
export const ButtonAction = ({ children }) => {
    return (
        <button className={[styles.button, styles.action]}>
            {children}
        </button>
    )
}


export const ButtonLinks = ({ children, href = "" }) => {
    return (
        <Link className={styles.button} href={href}>
            {children}
        </Link>
    )
}