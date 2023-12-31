import styles from './page.module.css'
import { getJokesCategories } from '@/lib/jokes'
import Thumbnail from '@/components/thumbnail/Thumbnail'
import { ButtonLinks } from '@/components/Buttons/Buttons'

export default async function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to Jokes app</h1>
      <div className={styles.listing}>
        {
          (await getJokesCategories()).map((category) => (
            <Thumbnail key={category} category={category} />
          ))
        }
      </div>
    </div>
  )
}
