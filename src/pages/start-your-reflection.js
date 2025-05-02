import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { Input } from '../components/form-elements/input'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useAppContext } from '../context/state'
import { createNewJournal } from '@/data/journal'

export default function StartYourReflection() {
    const router = useRouter()

    const createJournalEntry = (spreadId) => {
        createNewJournal({
            spread: Number(spreadId)
        }).then((res) => {
            router.push(`/daily-seed/${res?.id}`)
        })
    }


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
                
                        <button onClick={() => createJournalEntry(1)}>Draw One Card</button>
                        <div>Let the deck offer a message for your day</div>
                   
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