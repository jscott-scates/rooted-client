import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../../../components/form-elements/input'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { useAppContext } from '../../../context/state'


export default function EditJournal() {

    return (
        <>
            <div><h1>New Journal Entry</h1></div>
            <div>
                <input 
                    id="journal-title"
                    type='text'
                    label='Title'
                />
            </div>
            <div>
                Tip Tap placeholder for journal entry
            </div>
            <div>
                Mood Dropdown Placeholder
            </div>
            <div>
                Lunar Phase Placeholder
            </div>
            <Link href="journals/id/index"> 
                <button>Save Journal Entry</button>
            </Link>
        </>
    )
}

EditJournal.getLayout = function getLayout(page){
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}