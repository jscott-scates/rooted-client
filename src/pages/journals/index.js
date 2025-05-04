import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../../components/form-elements/input'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { useAppContext } from '../../context/state'
import { getAllJournals } from '@/data/journal'
import JournalCard from '@/components/journalCard'


export default function Journals() {
    const [journalList, setJournalList] = useState([])

    useEffect(() => {
        getAllJournals().then((journalsData) => {
            setJournalList(journalsData)
        })
    },[])

    console.log(journalList)

    return (
        <>
            <div>
                <h1>Journal History</h1>
            </div>
            <div>
                {/*Journal Entries */}
                <div>
                    {journalList.map((journal) => (
                        <Link href={`/journals/${journal.id}`} key={journal.id}>
                            <JournalCard journal={journal} />
                        </Link>
                    ))}

                </div>
                {/* Filter Bar */}
                <div>
                    Filter Bar HERE
                </div>
            </div>
        </>
    )
}

Journals.getLayout = function getLayout(page){
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}