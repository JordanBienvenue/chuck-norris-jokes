import React from 'react'
import { ButtonLinks } from '../Buttons/Buttons'
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Norris</h1>
            <ButtonLinks href="/jokes"> Random Jokes</ButtonLinks>
        </header>
    )
}

export default Header