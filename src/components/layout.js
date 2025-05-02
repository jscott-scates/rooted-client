import '@/styles/globals.css'
import Head from 'next/head'
import { AppWrapper } from '../context/state'

export default function Layout({children}) {
    return (
        <AppWrapper>
            <>
                <Head>
                    <title>TheRootedDeck</title>
                </Head>
                <main className="w-full">{children}</main>
            </>
        </AppWrapper>
    )
}