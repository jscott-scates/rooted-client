import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { useAppContext } from '../../../context/state'
import { deleteJournalById, getJournalById } from '@/data/journal'


export default function Journal() {
    const router = useRouter()
    const {id} = router.query
    const [journal, setJournal] = useState({})

    useEffect(() => {
            if(id){
                getJournalById(Number(id)).then((journalData) => {
                    setJournal(journalData)
                })
            }
    },[id])

   const deleteEntry = () => {
    deleteJournalById(Number(id))
    router.push(`/journals`)
   }

   if (!journal) return 

    return (
        <>
            <div>
                {/* Journal Header */}
                <div>
                    <div>
                        <h1>{journal.title}</h1>
                    </div>
                    <div>
                        <div>
                            Mood: {journal.mood}
                        </div>
                        <div>
                            Lunar Phase: {journal.lunar_phase}                    
                        </div>
                        <div>
                            Created On: {journal.created_on}
                        </div>
                    </div>
               </div>
               {/*Tip Tap Preview of HTML, takes the entry text input and converts it to HTML within the DIV*/}
               <div dangerouslySetInnerHTML={{__html:journal.entry_text}}/>
               {/* Buttons */}
               <div>
                <div>
                        <div>
                            <button onClick={() => {router.push(`${id}/edit`)}}>Edit Your Journal</button>
                        </div>
                        <div>
                            <button onClick={() => deleteEntry()}> Delete Your Journal Entry</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Journal.getLayout = function getLayout(page){
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}