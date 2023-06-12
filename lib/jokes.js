
export const getJokesCategories = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/categories")
    const data = await response.json()
    return data
}
