import React from 'react'
import { ButtonLinks } from '../Buttons/Buttons'
import styles from "./Header.module.css"
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <h1>Norris</h1>
            </Link>
            <ButtonLinks href="/jokes"> Random Jokes</ButtonLinks>
        </header>
    )
}

export default Header