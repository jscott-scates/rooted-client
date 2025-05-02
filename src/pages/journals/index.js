import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Input } from '../../components/form-elements/input'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { useAppContext } from '../../context/state'


export default function Journals() {

    return (
        <>
            <div>
                <div>
                    Journal History
                </div>
                <div>
                    Journal Entries - will need to loop over existing Entries
                </div>
            </div>
            <div>
                Filter Bar Placeholder
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