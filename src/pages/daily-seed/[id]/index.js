import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../../../components/form-elements/input'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { spreadComponentsBySpreadId } from '@/components/spreads'
import { useAppContext } from '../../../context/state'
import { getUserProfile } from '@/data/auth'
import { getJournalById, updateJournalById } from '@/data/journal'

export default function DailySeed() {
    const router = useRouter()
    const {id} = router.query
    const { sage, setSage } = useAppContext()
    const [journal, setJournal] = useState({})
    const spreadId = journal?.spread?.id
    const SpreadComponent = spreadId ? spreadComponentsBySpreadId[spreadId] : null
    const seed = useRef(null)
    
    useEffect(() => {
        if(id){
            getJournalById(Number(id)).then((journalData) => {
                setJournal(journalData)
                
            })
        }
    
        getUserProfile().then((profileData)=>{
            if (profileData){
                setSage(profileData)
                }
        }
        )},[id])

    
    const updateSeedOnJournal = () => {
        const updatedSeed = seed.current?.value || ""
        const updatedJournal = {
            initial_seed: updatedSeed
        }
        updateJournalById(id, updatedJournal).then(() => {
            setJournal(updatedJournal)
            router.push('/home')
        })
        
    }

    const startJournal = () => {
        const updatedSeed = seed.current?.value || ""
        const updatedJournal = {
            initial_seed: updatedSeed
        }
        
        updateJournalById(id, updatedJournal).then(() => {
            router.push(`/journals/${id}/edit`)
        })
    }
    

    return (
        <>
            <div>
                {/*Header Information */}
                <div>
                    <div>
                        <h1>{journal?.spread?.name}</h1>
                    </div>
                    <div>
                        {journal?.spread?.num_positions ?
                        (
                            <>
                                <h3>Select a Card to Guide Your Path, Sage.</h3>
                            </>
                        ) : (
                            <>
                                <h3>Reveal the Cards, Sage.</h3>
                            </>
                        )
                        }
                    </div>
                </div>
                {/*Cards to be flipped*/}
                <div>
                    <>
                        {SpreadComponent ? (
                            <SpreadComponent cards={journal.entry_cards}/>
                        ):(
                            <p>Unknown spread layout.</p>
                        )}
                    </>
                </div>
                {/*Initial Seed Capture*/}
                <div>
                    <div>
                        <h3>Plant a seed of insight to nurture later...</h3>
                    </div>
                    <div>
                        <form className="box">
                            <Input
                                id="seed"
                                refEl={seed}
                                type="text"
                                label=""
                                placeholder="You don't have to say much -- just enough to remember the moment."
                            />
                        </form>
                    </div>
                    {/*Buttons*/}
                    <div>
                        <button onClick={() => updateSeedOnJournal()} className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full">Save Insight</button>
                        <button onClick={() => startJournal()}className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full">Tend to Your Roots</button>

                    </div>
                </div>
            </div>
        </>
    )
}

DailySeed.getLayout = function getLayout(page){
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    )
}