import Link from 'next/link'
import { ButtonLinks } from '@/components/Buttons/Buttons'

export default function NotFound() {
    return (
        <main>
            <h2>Category Not Found</h2>
            {/* <p>Could not find requested resource</p> */}
            <ButtonLinks href="/">Go Home</ButtonLinks>
        </main>
    )
}