import React from 'react'
import styles from "./Thumbnail.module.css"
import Link from 'next/link'
const Thumbnail = ({ category }) => {
    return (
        <Link href={`/jokes/${category}`}>
            <div className={styles.container}>{category}</div>
        </Link>
    )
}

export default Thumbnail