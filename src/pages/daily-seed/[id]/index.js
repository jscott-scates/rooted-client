import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../../../components/form-elements/input'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { useAppContext } from '../../../context/state'

export default function DailySeed() {

    return (
        <>
            <div className='flex justify-center  mt-10'>
                <div className="card bg-emerald-800 w-7/12">
                    <div className='text-center mt-10 mb-8'>
                        <h1>Select Your Card</h1>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <div>
                            Card Placeholder #1, #2, #3, will need a loop 
                        </div>
                    </div>
                    <div>
                        <div className='text-center mt-8'><h3>Leave a root of insight to return to later...</h3></div>
                        <input 
                            id="initialSeed"
                            type='text'
                            label='Initial Seed'
                            placeholder="You don't have to say much -- just enough to remember the moment."
                        />
                    </div>
                    <div>
                        <Link href='home'>
                            <button className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full">Save Insight</button>
                        </Link>
                        <Link href='journals/1/edit'> {/*does not go to new, after the card is drawn it creates a journal entry, goes to edit*/}
                            <button className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full">Tend to Your Roots</button>
                        </Link>
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