"use client"
import { ButtonAction, ButtonLinks } from '@/components/Buttons/Buttons'
import Card from '@/components/Card/Card'
import { useState, useEffect } from 'react'
import styles from "./page.module.css"

const page = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const getJoke = async () => {
        setLoading(true)

        fetch('https://api.chucknorris.io/jokes/random')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        getJoke()
    }, [])

    // if (isLoading) return <p>Loading...</p>
    if (!data) return <p>Searching Best Jokes...</p>

    return (
        <main>
            <h1>Random Joke</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "end" }} >
                <Card data={data} />
                <div className={styles.button_wrapper}>
                    <ButtonAction onClick={() => getJoke()}>
                        reload
                    </ButtonAction>
                    <ButtonLinks href="/">
                        Back to Home
                    </ButtonLinks>
                </div>

            </div>
        </main >
    )
}
export default page