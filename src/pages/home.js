import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../components/form-elements/input'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useAppContext } from '../context/state'
import { login } from '../data/auth'
import { getAllJournals } from '@/data/journal'
import JournalCard from '@/components/journalCard'

export default function Home() {
  const [journalList, setJournalList] = useState([])

  useEffect(() => {
    getAllJournals().then((journalData) => {
      setJournalList(journalData)
    })
  },[])

  console.log(journalList)

  return (
    <>
        <div>
            <div>
                <h1>Welcome back, Sage.</h1>  
            </div>
            <div>
                <h3>The cards are waiting, and so is your reflection.</h3>
            </div>
            <div>
                <Link href="/start-your-reflection">
                  <button className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full">Draw Your Card for Today</button>
                </Link>
            </div>
        </div>
        <div>
            <hr></hr>
        </div>
        <div>
            <div>
                <h2>Your Path This Week</h2>
            </div>
            <div>
                {journalList.map((journal) => (
                  <Link href={`journals/${journal.id}`} key={journal.id}>
                    <JournalCard journal={journal}/>
                  </Link>
                ))}
            </div>
        </div>
        <div>
            <hr></hr>
        </div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}