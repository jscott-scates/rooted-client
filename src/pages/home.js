import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../components/form-elements/input'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useAppContext } from '../context/state'
import { login } from '../data/auth'

export default function Home() {
  
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
                Journal Entries Placeholder
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