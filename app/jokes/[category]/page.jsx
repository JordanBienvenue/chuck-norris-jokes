import React from 'react'
import { notFound } from "next/navigation"
import Card from '@/components/Card/Card'
import style from "./page.module.css"


async function getJoke(category) {
    const res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    if (!res.ok) return undefined
    return await res.json()
}


const CategoryPage = async ({ params: { category } }) => {
    const data = await getJoke(category)

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

    if (!data) { notFound() }
    return (
        <main className={style.container}>
            <h1>Random Joke about {capitalize(category)}</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "end" }} >
                <Card data={data} />
            </div>
        </main>
    )
}

export default CategoryPage

//  https://api.chucknorris.io/jokes/random?category={category}
// https://api.chucknorris.io/jokes/random?category=animal
