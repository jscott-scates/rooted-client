import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../../../components/form-elements/input'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { useAppContext } from '../../../context/state'
import { getChoices, getJournalById, updateJournalById } from '@/data/journal'
import { Select } from '@/components/form-elements/select'
import { Editor, EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'



export default function EditJournal() {
    const router = useRouter()
    const {id} = router.query
    const [journal, setJournal] = useState({})
    const [moodsList, setMoodsList] = useState([])
    const [lunarPhasesList, setLunarPhasesList] = useState([])
    const entryTitle = useRef(journal?.title)    
    const mood = useRef(journal?.mood)
    const lunarPhase = useRef(journal?.lunar_phase)
    const tiptapEditor = useEditor({
        extensions: [StarterKit],
        autofocus: false,
        editable: true,
        injectCSS: false,
      })


    useEffect(() => {
        if (id && tiptapEditor){
            getJournalById(Number(id)).then((journalData) => {
                setJournal(journalData)
                tiptapEditor.commands.setContent(journalData.entry_text)
            })
        }
        getChoices().then((choices) => {
            setMoodsList(choices.moods)
            setLunarPhasesList(choices.lunar_phases)
        })
    },[id, tiptapEditor])
    
    useEffect(() => {
        if (journal.title && entryTitle.current) {
          entryTitle.current.value = journal.title
        }
        if (journal.mood && mood.current) {
          mood.current.value = journal.mood
        }
        if (journal.lunar_phase && lunarPhase.current) {
          lunarPhase.current.value = journal.lunar_phase
        }
      }, [journal])

    const saveJournalEntry = () => {
        const updatedTitle = entryTitle.current?.value || ""
        const updatedEntryText = tiptapEditor.getHTML()
        const updatedMood = mood.current?.value
        const updatedLunarPhase = lunarPhase.current?.value
        const updatedJournal = {
            title: updatedTitle,
            entry_text: updatedEntryText,
            mood: updatedMood,
            lunar_phase: updatedLunarPhase
        }

        updateJournalById(Number(id),updatedJournal).then(() => {
            router.push(`/journals/${id}`)
        })
    }

    if (!journal) return 

    return (
        <>
            <div>
                <div>
                    <h1>Tend Your New Growth</h1>
                </div>
                <form>
                    <div>
                        <Input
                            id="entry_title"
                            refEl={entryTitle}
                            type="text"
                            label=""
                            placeholder="Title"
                            defaultValue={journal.title}
                        />
                    </div>
                    <div>
                        {/*<Tiptap />*/}
                        <EditorContent editor={tiptapEditor}/>
                    </div>
                    <div>
                        <div>
                            <Select
                                id="mood"
                                refEl={mood}
                                options={moodsList}
                                label="Mood of the Day"
                                title="Select a Mood"
                                defaultValue={journal.mood}
                            />
                        </div>
                        <div>
                            <Select
                                    id="lunarPhase"
                                    refEl={lunarPhase}
                                    options={lunarPhasesList}
                                    label="Moon Phase"
                                    title="Select the Moon Phase"
                                    defaultValue={journal.lunar_phase}
                                />
                        </div>
                    </div>
                </form>
                <div>
                    <button onClick={saveJournalEntry}>Save</button>
                </div>
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