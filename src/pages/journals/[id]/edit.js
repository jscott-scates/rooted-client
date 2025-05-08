import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Input } from '../../../components/form-elements/input';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar';
import { getChoices, getJournalById, updateJournalById } from '@/data/journal';
import { Select } from '@/components/form-elements/select';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import EntryCardDisplay from '@/components/entryCard';

export default function EditJournal() {
    const router = useRouter();
    const { id } = router.query;
    const [journal, setJournal] = useState({});
    const [moodsList, setMoodsList] = useState([]);
    const [lunarPhasesList, setLunarPhasesList] = useState([]);
    const entryTitle = useRef(null);
    const mood = useRef(null);
    const lunarPhase = useRef(null);
    const tiptapEditor = useEditor({
        extensions: [StarterKit],
        autofocus: false,
        editable: true,
        injectCSS: false,
    });

    useEffect(() => {
        if (id && tiptapEditor) {
            getJournalById(Number(id)).then((journalData) => {
                setJournal(journalData);
                tiptapEditor.commands.setContent(journalData?.entry_text);
            });
        }
        getChoices().then((choices) => {
            setMoodsList(choices.moods);
            setLunarPhasesList(choices.lunar_phases);
        });
    }, [id, tiptapEditor]);

    function getOptionValueByLabel(options, label) {
        const match = options.find((option) => option.label === label);
        return match ? match.value : '0'; // fallback to "Select a Mood" or similar
    }

    useEffect(() => {
        setTimeout(() => {
            if (entryTitle.current) {
                entryTitle.current.value = journal.title || '';
            }
            if (mood.current && moodsList.length > 0) {
                mood.current.value = getOptionValueByLabel(
                    moodsList,
                    journal.mood
                );
            }
            if (lunarPhase.current && lunarPhasesList.length > 0) {
                lunarPhase.current.value = getOptionValueByLabel(
                    lunarPhasesList,
                    journal.lunar_phase
                );
            }
        }, 0);
    }, [journal, moodsList, lunarPhasesList]);

    const saveJournalEntry = () => {
        const updatedTitle = entryTitle.current?.value;
        const updatedEntryText = tiptapEditor.getHTML();
        const updatedMood = mood.current?.value;
        const updatedLunarPhase = lunarPhase.current?.value;
        const updatedJournal = {
            title: updatedTitle,
            entry_text: updatedEntryText,
            mood: updatedMood,
            lunar_phase: updatedLunarPhase,
        };

        updateJournalById(Number(id), updatedJournal).then(() => {
            router.push(`/journals/${id}`);
        });
    };

    if (!journal) return;

    return (
        <>
            <div className="flex flex-col justify-center mt-6">
                <div className="flex justify-center font-display">
                    {journal.title === '' && journal.entry_text === '' ? (
                        <>
                            <div className="flex flex-col">
                                <div>
                                    <h1 className="text-6xl">
                                        Tend Your New Growth
                                    </h1>
                                </div>
                                <div>
                                    <h3 className="text-3xl flex justify-center mb-4">
                                        Your inner garden welcomes you.
                                    </h3>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col">
                                <div>
                                    <h1 className="text-6xl">
                                        Return to the Garden Within
                                    </h1>
                                </div>
                                <div>
                                    <h3 className="text-3xl flex justify-center mb-4">
                                        Let your roots deepen through
                                        reflection.
                                    </h3>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="grid grid-cols-4 gap-5 mt-8">
                    {/*Entry Card View*/}
                    <div className="col-span-2 flex items-start justify-center p-6">
                        {journal.entry_cards?.length > 0 ? (
                            <EntryCardDisplay cards={journal.entry_cards} />
                        ) : (
                            <p className="text-[#B7C6A1] italic">
                                Your cards will appear here once loaded.
                            </p>
                        )}
                    </div>
                    {/*Edit Form*/}
                    <div className="col-span-2 pt-6 mr-10 flex justify-start">
                        <form className="w-full font-body text-2xl">
                            <div className="mb-6">
                                <Input
                                    id="entry_title"
                                    refEl={entryTitle}
                                    type="text"
                                    label="Title:"
                                    placeholder="Title"
                                    defaultValue={journal.title}
                                />
                            </div>
                            <div>
                                <div className="mb-6">
                                    <Select
                                        id="mood"
                                        refEl={mood}
                                        options={moodsList}
                                        label="Mood of the Day"
                                        title="Select a Mood"
                                        defaultValue={journal?.mood}
                                    />
                                </div>
                                <div className="mb-6">
                                    <Select
                                        id="lunarPhase"
                                        refEl={lunarPhase}
                                        options={lunarPhasesList}
                                        label="Moon Phase"
                                        title="Select the Moon Phase"
                                        defaultValue={journal?.lunar_phase}
                                    />
                                </div>
                            </div>
                            <div>
                                {/*<Tiptap />*/}
                                <h3 className="font-body text-2xl mb-1">
                                    Journal Entry:
                                </h3>
                                <div className="text-[#EFE5CB] w-full min-h-48 border border-[#DDBE8B] rounded-md p-4 bg-[#241A14] shadow-sm">
                                    <EditorContent editor={tiptapEditor} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={saveJournalEntry}
                        className="bg-goldenbrown text-[#EFE5CB] font-body shadow border border-[#EFE5CB] hover:bg-[#414831] transition text-2xl font-bold py-2 px-10 rounded-full"
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}

EditJournal.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Navbar />
            {page}
        </Layout>
    );
};
