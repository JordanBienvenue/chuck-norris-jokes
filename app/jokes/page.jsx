"use client"
import { ButtonAction } from '@/components/Buttons/Buttons'
import Card from '@/components/Card/Card'
import { useState, useEffect } from 'react'

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
                <ButtonAction onClick={() => getJoke()}>
                    reload
                </ButtonAction>
            </div>
        </main >
    )
}
export default page