import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../components/form-elements/input'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useAppContext } from '../context/state'

export default function StartYourReflection() {

    return (
        <>
            <div>
                <div>
                    <h1>Begin Your Reflection</h1>
                </div>
                <div>
                    <h3>What wisdom do you seek today, Sage?</h3>
                </div>
            </div>
            <div>
                <div>
                    <Link href='/daily-seed'>
                        <div>Draw One Card</div>
                        <div>Let the deck offer a message for your day</div>
                    </Link>
                </div>
                <div>
                    <div>Choose A Spread</div>
                    <div>Explore deeper themes and patterns</div>
                </div>
            </div>
            <div>
                <div>Suggested Spreads</div>
                <div>Spread Placeholders</div>
            </div>
        </>
    )
}

StartYourReflection.getLayout = function getLayout(page){
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}