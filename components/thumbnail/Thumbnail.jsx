import React from 'react'
import styles from "./Thumbnail.module.css"
import Link from 'next/link'
const Thumbnail = ({ category }) => {
    return (
        <Link className={styles.container} href={`/jokes/${category}`}>
            <p>{category}</p>
        </Link>
    )
}

export default Thumbnail