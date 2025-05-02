import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { Input } from '../../../components/form-elements/input'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { useAppContext } from '../../../context/state'


export default function EditJournal() {
    const router = useRouter()
    const {id} = router.query
    const [journal, setJournal] = useState({})
    const entryTitle = useRef(null)    

    return (
        <>
            <div>
                <div>
                    <h1>Tend Your New Growth</h1>
                </div>
                <form>
                    <Input
                        id="entry_title"
                        refEl={entryTitle}
                        type="text"
                        label=""
                        placeholder="Title"
                    />
                </form>
            </div>
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