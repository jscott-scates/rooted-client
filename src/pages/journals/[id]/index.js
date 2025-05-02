import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../../../components/form-elements/input'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { useAppContext } from '../../../context/state'


export default function Journal() {

    return (
        <>
            <div>
                <div>
                    Card / Spread Image Placeholder
                </div>
                <div>
                    Created Title
                </div>
                <div>
                    Tip Tap Preview
                </div>
                <div>
                    Mood
                </div>
                <div>
                    Lunar Phase
                </div>
                <div>
                    <Link href="1/edit">
                        <button>Edit Your Journal</button>
                    </Link>
                    <button>Delete Your Journal</button>
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