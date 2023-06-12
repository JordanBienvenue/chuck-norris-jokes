import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'
const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p>{data.value}</p>
                <div className={styles.author}>
                    <p> ~ chuck Norris</p>
                </div>
            </div>
            <figure>
                <Image src="/images/1.png" width={200} height={200} />
            </figure>
        </div>
    )
}

export default Card