import styles from "./Card.module.css"
import Image from 'next/image'
const Card = ({ data, isLoading }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p>{data.value}</p>
                <div className={styles.author}>
                    <p> ~ chuck Norris</p>
                </div>
            </div>
            <Image className={styles.image} src="/images/1.png" width={200} height={200} alt='chuck-norris' />
        </div>
    )
}

export default Card